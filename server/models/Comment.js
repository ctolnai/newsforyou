const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    comment_body: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    datePublished: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
  }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;
