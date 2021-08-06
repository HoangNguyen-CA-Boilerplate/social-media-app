const express = require('express');
const { body } = require('express-validator');

const { wrapAsync } = require('../../util');
const { isAuth } = require('../../middleware/auth');
const AppError = require('../../AppError');

const User = require('../../models/User');
const Post = require('../../models/Post');

const router = express.Router();

router.post(
  '/',
  isAuth,
  wrapAsync(async (req, res) => {
    const { text } = req.body;
    const post = new Post({ text, user: req.user._id, likes: [] });
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  })
);

module.exports = router;
