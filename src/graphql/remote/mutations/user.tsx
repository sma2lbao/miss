import { gql } from "@apollo/client";

export const CREATE_FOLLOW = gql`
  mutation createFollow($follow: CreateFollowInput!) {
    create_follow(follow: $follow) {
      create_at
    }
  }
`;

export const REMOVE_FOLLOW = gql`
  mutation removeFollow($follow: DeleteFollowInput!) {
    remove_follow(follow: $follow) {
      create_at
    }
  }
`;
