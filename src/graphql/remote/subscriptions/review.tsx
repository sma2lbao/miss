import { gql } from "@apollo/client";

export const REVIEW_CREATED = gql`
  subscription reviewCreated($type: ReviewMedium!, $type_id: ID!) {
    review_created(type: $type, type_id: $type_id) {
      ...Review
      author {
        ...Author
      }
    }
  }
`;
