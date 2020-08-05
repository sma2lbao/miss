import { gql } from "@apollo/client";

export const ME = gql`
  fragment Me on User {
    uid
    nickname
    email
  }
`;

export const AUTHOR = gql`
  fragment Author on User {
    uid
    avatar
    nickname
    username
  }
`;
