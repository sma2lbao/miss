import { gql } from "@apollo/client";

export const ME = gql`
  fragment Me on User {
    uid
    username
    email
    nickname
    avatar
    mobile
    address
    description
    create_at
    update_at
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
