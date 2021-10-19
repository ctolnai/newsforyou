const { AuthenticationError } = require('apollo-server-express');
const { User, Article, Tag } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
      users: async () => {
        return User.find({});
      },

      user: async (parent, { userId }) => {
        return User.findOne({_id: userId});
      },
      articles: async () => {
        return Article.find({});
      },
      comments: async () => {
        return Comment.find({});
      },
      tags: async () => {
        return Tag.find({});
      },
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
