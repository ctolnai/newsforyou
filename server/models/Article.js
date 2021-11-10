const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true
    },
    article_body: {
      type: String,
      required: true,
      trim: true
    },
    datePublished: {
      type: Date,
      required: true,
      trim: true
    },
    category:
      {
        type: String,
        required: true,
        trim: true
      },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    comments: [
      {
        comment_body: {
          type: String,
          required: true,
          trim: true
        },
        datePublished: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        },
        author: {
            type: String,
            required: true,
            trim: true
        },
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
      },
    ],
  }
);

const Article = model('Article', articleSchema);

module.exports = Article;
