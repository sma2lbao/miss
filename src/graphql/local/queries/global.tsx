import { gql } from "@apollo/client";

export const HTTP_DOMAIN = gql`
  query httpDomain {
    http_domain_url @client
  }
`;
