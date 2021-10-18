import { gql } from '@apollo/client';



export const ADD_PROFILE = gql`
  mutation addProfile($name: String!) {
    addProfile(name: $name) {
      _id
      name
      skills
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($email: String!, password: String!) {
    removeUser(user: $user) {
      token
      profile{
          _id
          name
      }
      
    }
  }
`;