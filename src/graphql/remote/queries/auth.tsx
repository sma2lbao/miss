import { gql } from "@apollo/client";

export const PLATFORM_AUTH_WAY = gql`
  query platformAuthWay {
    platform_auth_way {
      platform
      url
    }
  }
`;

export const has_username = gql`
  query hasUsername($username: String!) {
    has_username(username: $username)
  }
`;
