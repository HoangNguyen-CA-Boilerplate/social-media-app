const express = require('express');
const { body, param } = require('express-validator');

const { wrapAsync, handleValidationErrors } = require('../../util');
const { isAuth } = require('../../middleware/auth');
const AppError = require('../../AppError');

const User = require('../../models/User');
const Post = require('../../models/Post');

const router = express.Router();

router.get(
  '/',
  wrapAsync(async (req, res) => {
    const posts = await Post.find();
    res.status(200).json(posts);
  })
);

router.post(
  '/',
  isAuth,
  wrapAsync(async (req, res) => {
    const { title, text } = req.body;
    const post = new Post({ title, text, user: req.user._id, likes: [] });
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  })
);

router.delete(
  '/:id',
  isAuth,
  wrapAsync(async (req, res) => {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) throw new AppError(400, 'post does not exist');
    if (!req.user._id.equals(post.user))
      throw new AppError(401, 'user is not authorized to delete post');

    const deletedPost = await post.deleteOne();
    res.status(200).json(deletedPost);
  })
);

module.exports = router;
