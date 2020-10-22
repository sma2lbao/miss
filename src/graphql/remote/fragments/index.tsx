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

export const MOVIE = gql`
  fragment Shadow on Shadow {
    id
    description
    title
    sub_title
    create_at
    update_at
    cover
    posters
  }
`;

export const SOURCE = gql`
  fragment ShadowSource on ShadowMedium {
    id
    url
    super_quality_url
    preview_url
    posters
    name
    medium_quality_url
    low_quality_url
    high_quality_url
    duration
    description
    alias_name
    create_at
    update_at
  }
`;
