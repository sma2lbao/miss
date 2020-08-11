import { gql } from "@apollo/client";

export const typeDefs = gql`
  directive @client on FIELD

  extend type PlatformAuthWay {
    http_domain: String
  }

  extend type User {
    avatar: String!
  }

  extend type Query {
    http_domain_url: String!
  }
`;

export default typeDefs;
