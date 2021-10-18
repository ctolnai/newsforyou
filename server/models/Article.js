const { Schema, model } = require('mongoose');

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
    category: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category'
      }
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  }
);

const Article = model('Article', articleSchema);

module.exports = Article;
