import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

export const SEND_REGISTER_EMAIL = gql`
  mutation sendRegisterEmail($email: String!) {
    send_register_email(email: $email)
  }
`;

export const CREATE_USER_WITH_CODE = gql`
  mutation createUserWithCode($user: CreateUserWithCodeInput!) {
    create_user_with_code(user: $user) {
      username
      avatar
    }
  }
`;
