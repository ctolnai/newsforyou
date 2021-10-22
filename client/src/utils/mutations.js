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

export const UPDATE_PREFERENCES = gql`
mutation updateUserPreferences($id: ID!, $preferences: [String!]) {
  updateUserPreferences(id: $id, preferences: $preferences) {
    _id
    username
    preferences
  }
}
`;


export const UPDATE_USER = gql`
mutation updateUser($username: String, $email: String, $password: String) {
  updateUser(username: $username, email: $email, password: $password) {
      _id
      username
      email

  }
}
`;