import { gql } from '@apollo/client';
// USER QUERIES
export const QUERY_USERS = gql`
  query users {
    users {
        _id
        username
        email
        password
        preferences     
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query userById($userId: ID!) {
    userById(userId: $userId) {
        _id
        username
        email
        password
        preferences    
    }
  }
`;
// ARTICLE QUERIES
// need to add likes and comments later, currently erroring when requested
export const QUERY_ARTICLES = gql`
  query articles {
    articles {
        _id
        author
        description
        thumbnail
        article_body
        datePublished
        category
    }
  }
`;

export const QUERY_SINGLE_ARTICLE = gql`
  query articleById($articleId: ID!) {
    articleById(articleId: $articleId) {
        _id
        author
        description
        thumbnail
        article_body
        datePublished
        category
    }
  }
`;
//COMMENT QUERIES
export const QUERY_COMMENTS = gql`
  query comments {
    comments {
      _id
      comment_body
      datePublished
      author
    }
  }
  `;

  export const QUERY_SINGLE_COMMENT = gql`
  query commentsById($commentId: ID!) {
    commentById(commentId: $commentId) {
      _id
      comment_body
      datePublished
      author
    }
  }
  `;
