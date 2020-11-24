import { gql } from "@apollo/client";

export const ME = gql`
  fragment Me on User {
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
  }
`;

export const AUTHOR = gql`
  fragment Author on User {
    uid
    avatar
    nickname
    username
    description
  }
`;

export const SHADOW = gql`
  fragment Shadow on Shadow {
    id
    description
    title
    sub_title
    create_at
    update_at
    cover
    posters
    region
    about
    sources {
      ...ShadowSource
    }
  }
`;

export const SOURCE = gql`
  fragment ShadowSource on ShadowMedium {
    id
    cover
    url
    super_quality_url
    preview_url
    posters
    name
    sub_name
    medium_quality_url
    low_quality_url
    high_quality_url
    youtube_url
    duration
    description
    alias_name
    create_at
    update_at
    vote_like_count
    vote_dislike_count
  }
`;

export const REVIEW = gql`
  fragment Review on Review {
    id
    content
    create_at
    update_at
  }
`;
