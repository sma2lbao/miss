import { gql } from "@apollo/client";

export const PLATFORM_AUTH_WAY = gql`
  # directive @client on FIELD
  query platformAuthWay {
    platform_auth_way {
      platform
      url
      http_domain @client
    }
  }
`;

export const HAS_USERNAME = gql`
  query hasUsername($username: String!) {
    has_username(username: $username)
  }
`;

export const ME = gql`
  query me {
    me {
      ...Me
    }
  }
`;
