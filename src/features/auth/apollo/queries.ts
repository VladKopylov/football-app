import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp(
    $avatar: String
    $username: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    signUp(
      input: {
        avatar: $avatar
        username: $username
        email: $email
        password: $password
        passwordConfirmation: $passwordConfirmation
      }
    )
  }
`;

export const LOGIN = gql`
  mutation Login($login: String!, $password: String!) {
    login(data: { email: $login, password: $password }) {
      token
      user {
        email
      }
    }
  }
`;

export const ME = gql`
  query getMeInfo{
    me {
      firstName
      lastName
    }
  }
`;
