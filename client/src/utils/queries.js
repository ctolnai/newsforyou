import { gql } from '@apollo/client';

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