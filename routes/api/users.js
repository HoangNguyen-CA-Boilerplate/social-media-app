const express = require('express');

const { body } = require('express-validator');

const { wrapAsync, handleValidationErrors } = require('../../util');
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

//update user
router.patch(
  '/',
  body('displayName')
    .trim()
    .escape()
    .isLength({ min: 1, max: 25 })
    .withMessage('display name must be 1 to 25 characters long'),
  body('bio')
    .trim()
    .escape()
    .isLength({ max: 160 })
    .withMessage('bio must be at most 160 characters long'),
  isAuth,
  wrapAsync(async (req, res) => {
    handleValidationErrors(req);

    const { displayName, bio } = req.body;
    const user = req.user;

    user.displayName = displayName;
    user.bio = bio;

    const savedUser = await user.save();
    res.status(200).json(savedUser);
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

router.get(
  '/:username/followers',
  wrapAsync(async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({ username }).populate(
      'followers followings'
    );
    if (!user) throw new AppError(400, "user doesn't exist");

    res.status(200).json(user.followers);
  })
);
router.get(
  '/:username/followings',
  wrapAsync(async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({ username }).populate('followings');
    if (!user) throw new AppError(400, "user doesn't exist");

    res.status(200).json(user.followings);
  })
);

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

    const posts = await Post.find({ user: user._id })
      .sort({ createdAt: -1 })
      .populate('user');
    res.status(200).json(posts);
  })
);

router.put('/');

module.exports = router;
