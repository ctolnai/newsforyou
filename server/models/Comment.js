const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    comment_content: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    publisheDate: {
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
