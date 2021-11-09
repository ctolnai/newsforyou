const { AuthenticationError } = require('apollo-server-express');
const { User, Article, Tag, Comment} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
      users: async () => {
        return User.find({});
      },
      userById: async (parent, args, context) => {
        if (context.user){
        return User.findOne({_id: context.user._id});
      }
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
      articleByCategory: async (parent, { articleCategory }) => {
        return Article.find({category: articleCategory}).limit(4);
      },
      articleByCategoryNoLimit: async (parent, { articleCategory }) => {
        return Article.find({category: articleCategory});
      }
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
    
    removeUser: async( parent, {id}) => {
      return User.findOneAndDelete({ _id: id })

    },

    // updateUserPreference: async (parent, {preference}, context) => {
    //   if (context.user) {
    //     return User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       {preferences: preferences,},
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // }, 

    updateUserPreferences: async (parent, {id, preferences}) => {
          return User.findOneAndUpdate(
            { _id: id },
            {preferences: preferences,},
            {
              new: true,
              runValidators: true,
            }
          );
          },
    updateUser: async (parent, args, context) => {
      return User.findOneAndUpdate (
        { _id: context.user._id},
        {$set: args},
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addComment: async (parent, { comment_body, datePublished, author }) => {
      const comment = await Comment.create({ comment_body, datePublished, author });
      return { comment };
    },
  },
};

module.exports = resolvers;
