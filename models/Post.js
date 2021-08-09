const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRef = {
  type: Schema.Types.ObjectId,
  ref: 'User',
  required: true,
};

const postSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: { ...userRef, index: true },
    likes: [userRef],
  },
  { timestamps: true }
);

module.exports = Post = mongoose.model('Post', postSchema);
