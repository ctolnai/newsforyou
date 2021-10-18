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
  query User($userId: ID!) {
    user(userId: $userId) {
        _id
        username
        email
        password
        preferences    
    }
  }
`;