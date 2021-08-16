const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userRef = {
  type: Schema.Types.ObjectId,
  ref: 'User',
  required: true,
};

const userSchema = new Schema(
  {
    profilePicture: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      select: false,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    followers: [userRef],
    followings: [userRef],
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  try {
    const user = this;
    if (!user.isModified('password')) return next(); // only hash the password if it has been modified (or is new)

    const hash = await bcrypt.hash(user.password, 12);
    user.password = hash; // override the cleartext password with the hashed one
    return next();
  } catch (e) {
    next(e);
  }
});

userSchema.methods.verifyPassword = async function (pw) {
  const match = await bcrypt.compare(pw, this.password);
  return match;
};

module.exports = User = mongoose.model('User', userSchema);
