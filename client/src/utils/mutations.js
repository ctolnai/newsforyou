import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const REMOVE_USER = gql`
  mutation removeUser($email: String!, password: String!) {
    removeUser(username: $username) {
      token
      profile{
          _id
          username
      }
      
    }
  }
`;
export const UPDATE_PREFERENCES = gql`
mutation updateUserPreferences($id: ID!, $preferences: [String!]) {
  updateUserPreferences(id: $id, preferences: $preferences) {
    _id
    username
    preferences
  }
}
`;

