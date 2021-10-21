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
    title: String
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
    _id: ID
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
    #find by ID
    userById(userId: ID!): User
    articleById(articleId: ID!): Article
    articleByCategory(articleCategory: String!): [Article]
    articleByCategoryNoLimit(articleCategory: String!): [Article]
    commentById(commentId: ID!): Comment
    tagById(tagId: ID!): Tag
    commentByAuthor(author: String!): [Comment]   

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(id: ID!): User
    updateUserPreferences(id: ID!, preferences: [String!]): User
  }
`;

module.exports = typeDefs;
