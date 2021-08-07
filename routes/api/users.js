const express = require('express');

const { wrapAsync } = require('../../util');
const { isAuth } = require('../../middleware/auth');
const AppError = require('../../AppError');
const User = require('../../models/User.js');

const router = express.Router();

//protected route
router.get('/', isAuth, (req, res) => {
  res.status(200).json(req.user);
});

router.get(
  '/:username',
  wrapAsync(async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) throw new AppError(400, "user doesn't exist");

    res.status(200).json(user);
  })
);

router.delete(
  '/',
  isAuth,
  wrapAsync(async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.user._id);
    deletedUser.password = undefined; // important
    res.status(200).json(deletedUser);
  })
);

module.exports = router;
