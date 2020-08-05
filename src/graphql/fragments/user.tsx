import { gql } from "@apollo/client";

const ME = gql`
  fragment me on User {
    uid
    nickname
    email
  }
`;
