import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($userEmail: String!, $password: String!, $clubPassword: String!, $memberFirstName: String!, $memberLastName: String!) {
    createUser(userEmail: $userEmail, password: $password, clubPassword: $clubPassword, memberFirstName: $memberFirstName, memberLastName: $memberLastName) {
      token
    }
  }
`;

export const LOGIN_M = gql`
  mutation Login($userEmail: String!, $password: String!) {
    login(userEmail: $userEmail, password: $password) {
      token
    }
  }
`;