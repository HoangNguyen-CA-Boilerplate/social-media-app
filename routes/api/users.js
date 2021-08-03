const express = require('express');
const { body, oneOf } = require('express-validator');

const { wrapAsync, issueJWT, handleValidationErrors } = require('../../util');
const { isAuth } = require('../../middleware/auth');
const AppError = require('../../AppError');
const User = require('../../models/User.js');

const router = express.Router();

// register an user
router.post(
  '/register',
  body('username')
    .matches(/^[a-zA-Z0-9-_]+$/)
    .withMessage('username is not valid')
    .isLength({ min: 4, max: 15 })
    .withMessage('username must be 4 to 15 characters long'),
  body('email').isEmail().withMessage('email is not valid').normalizeEmail(),
  body('password')
    .isLength({ min: 5 })
    .withMessage('password must have a minimum length of 5'),
  wrapAsync(async (req, res) => {
    handleValidationErrors(req);

    const { email, password, username } = req.body;

    let foundUser = await User.findOne({ email });
    if (foundUser)
      throw new AppError(400, 'user with the given email already exists');

    foundUser = await User.findOne({ username });
    if (foundUser)
      throw new AppError(400, 'user with the given username already exists');

    const newUser = new User({
      email,
      password,
      username,
      displayName: username,
    });
    const savedUser = await newUser.save();

    savedUser.password = undefined; // !important

    const jwt = issueJWT(savedUser);
    res.json({ user: savedUser, token: jwt });
  })
);

//user login
router.post(
  '/login',
  body('email').isEmail().withMessage('email is not valid').normalizeEmail(),
  body('password')
    .isLength({ min: 5 })
    .withMessage('password must have a minimum length of 5'),
  wrapAsync(async (req, res) => {
    handleValidationErrors(req);

    const { email, password } = req.body;

    let foundUser = await User.findOne({ email }).select('+password');
    if (!foundUser)
      throw new AppError(400, 'user with the given email does not exist');

    const isValid = await foundUser.verifyPassword(password);
    if (!isValid) throw new AppError(401, 'incorrect password');

    foundUser.password = undefined; // !important

    const jwt = issueJWT(foundUser);
    res.json({ user: foundUser, token: jwt });
  })
);

//protected route
router.get('/', isAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
