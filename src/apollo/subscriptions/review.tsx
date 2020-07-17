import { gql } from "@apollo/client";

export const REVIEW_CREATED = gql`
  subscription reviewCreated($type: ReviewMedium!, $medium_id: ID!) {
    review_created(type: $type, medium_id: $medium_id) {
      content
      create_at
      author {
        nickname
        avatar
      }
    }
  }
`;
