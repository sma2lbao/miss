import { gql } from "@apollo/client";

export const typeDefs = gql`
  directive @client on FIELD

  extend type PlatformAuthWay {
    http_domain: String!
  }

  extend type User {
    avatar: String!
  }
`;

export default typeDefs;
