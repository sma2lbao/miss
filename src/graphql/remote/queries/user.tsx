import { gql } from "@apollo/client";

export const IS_FOLLOWING = gql`
  query isFollowing($owner_uid: String!, $follower_uid: String) {
    is_following(owner_uid: $owner_uid, follower_uid: $follower_uid)
  }
`;

export const USER = gql`
  query user($uid: String, $username: String) {
    user(uid: $uid, username: $username) {
      uid
      username
      email
      nickname
      avatar
      mobile
      address
      description
      create_at
      update_at
      delete_at
    }
  }
`;
