const { AuthenticationError } = require('apollo-server-express');
const { User, Article, Tag, Comment} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
      users: async () => {
        return User.find({});
      },

      userById: async (parent, { userId }) => {
        return User.findOne({_id: userId});
      },
      articles: async () => {
        return Article.find({});
      },
      
      articleById: async (parent, { articleId }) => {
        return Article.findOne({_id: articleId});
      },
      comments: async () => {
        return Comment.find({});
      },
      
      commentById: async (parent, { commentId }) => {
        return Comment.findOne({_id: commentId});
      },
      // tags: async () => {
      //   return Tag.find({});
      // },
      
      // user: async (parent, { userId }) => {
      //   return Tag.findOne({_id: userId});
      // },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    
  },
};

module.exports = resolvers;
