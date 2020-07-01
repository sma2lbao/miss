import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

export const SEND_REGISTER_EMAIL = gql`
  mutation($email: String!) {
    send_register_email(email: $email)
  }
`;

export const CREATE_USER_WITH_CODE = gql`
  mutation($user: CreateUserWithCodeInput!) {
    create_user_with_code(user: $user) {
      username
      avatar
    }
  }
`;
