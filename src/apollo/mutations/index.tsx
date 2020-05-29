import { gql } from "apollo-boost";

export const ACCESS_TOKEN = gql`
  mutation($username: String!, $password: String!) {
    access_token(username: $username, password: $password)
  }
`;

export const SEND_EMAIL_OPT = gql`
  mutation($email: String!) {
    send_email_opt(email: $email)
  }
`;

export const ADD_USER_WITH_CODE = gql`
  mutation(
    $username: String!
    $password: String!
    $email: String!
    $code: String!
  ) {
    add_user_with_code(
      user: {
        username: $username
        password: $password
        email: $email
        code: $code
      }
    ) {
      uid
    }
  }
`;
