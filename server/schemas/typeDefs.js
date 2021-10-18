const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Comment]
    preferences: [String]
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
    category: String
    likes: [User]
    comments: [Comment]
  }

  type Comment {
    comment_body: String
    datePublished: String
    author: String
  }



  type Tag {
    _id: ID
    name: String
  }

  type Query {
    #return all queries
    users: [User]
    articles: [Article]
    comments: [Comment]
    tags: [Tag]
    #find by queries
    user(userId: ID!): User
    article(title: String!): Article
    comment(author: String!): [Comment]
    tag(name: String!): Tag    

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
