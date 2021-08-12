const express = require('express');

const { wrapAsync } = require('../../util');
const { isAuth } = require('../../middleware/auth');
const AppError = require('../../AppError');
const User = require('../../models/User.js');
const Post = require('../../models/Post');

const router = express.Router();

//protected route
router.get('/', isAuth, (req, res) => {
  res.status(200).json(req.user);
});

router.delete(
  '/',
  isAuth,
  wrapAsync(async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.user._id);
    deletedUser.password = undefined; // important
    deletedUser.email = undefined;
    res.status(200).json(deletedUser);
  })
);

router.get(
  '/:username',
  wrapAsync(async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) throw new AppError(400, "user doesn't exist");

    res.status(200).json(user);
  })
);

/*
const { id } = req.params;
    const post = await Post.findById(id);

    if (post.likes.includes(req.user._id)) {
      post.likes.pull(req.user._id);
    } else {
      post.likes.push(req.user._id);
    }

    const savedPost = await post.save();
    res.status(200).json(savedPost);
    */
router.patch(
  '/:username/follow',
  isAuth,
  wrapAsync(async (req, res) => {
    const { username } = req.params;

    const authUser = req.user;

    if (authUser.username === username)
      throw new AppError(400, "users can't follow themselves");

    const user = await User.findOne({ username });
    if (!user) throw new AppError(400, "user doesn't exist");

    if (authUser.followings.includes(user._id)) {
      // unfollow
      authUser.followings.pull(user._id);
      user.followers.pull(authUser._id);
    } else {
      //follow
      authUser.followings.push(user._id);
      user.followers.push(authUser._id);
    }

    await authUser.save();
    await user.save();
    res.status(200).json(user);
  })
);

router.get(
  '/:username/posts',
  wrapAsync(async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) throw new AppError(400, "user doesn't exist");

    const posts = await Post.find({ user: user._id }).populate('user');
    res.status(200).json(posts);
  })
);

router.put('/');

module.exports = router;
