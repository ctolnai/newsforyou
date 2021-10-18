const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Article {
    _id: ID
    author: String
    description: String
    thumbnail: String
    article_body: String
    datePublished: String
    category: Category
    likes: [User]
    comments: [Comment]
  }

  type Category {
    _id: ID
    name: String
  }

  type Tag {
    _id: ID
    name: String
  }

  type Query {
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
