import { gql } from "@apollo/client";

export const IS_FOLLOWING = gql`
  query isFollowing($owner_uid: String!, $follower_uid: String) {
    is_following(owner_uid: $owner_uid, follower_uid: $follower_uid)
  }
`;
