import { gql } from "@apollo/client";

export const create_follow = gql`
  mutation createFollow($follow: CreateFollowInput!) {
    create_follow(follow: $follow) {
      create_at
    }
  }
`;

export const remove_follow = gql`
  mutation removeFollow($follow: DeleteFollowInput!) {
    remove_follow(follow: $follow) {
      create_at
    }
  }
`;
