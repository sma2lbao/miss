import { gql } from "@apollo/client";

export const MOVIE = gql`
  query shadow($id: ID!) {
    shadow(id: $id) {
      credits {
        avatar
        name
        description
      }
      author {
        ...Author
      }
      alias_title
      region
      ...Shadow
      sources {
        ...ShadowSource
      }
    }
  }
`;

export const MOVIES_PAGINATED = gql`
  query shadowsPaginated($query: PaginatedQuery) {
    shadows_paginated(query: $query) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...Shadow
          author {
            ...Author
          }
        }
      }
    }
  }
`;

export const USER_MOVIES_PAGINATED = gql`
  query userShadowsPaginated(
    $author_username: String!
    $query: PaginatedQuery
  ) {
    user_shadows_paginated(author_username: $author_username, query: $query) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...Shadow
          author {
            ...Author
          }
        }
      }
    }
  }
`;

export const MOVIE_URGES_BY_MOVIE = gql`
  query shadowUrgesByShadow($shadow_id: ID!) {
    shadow_urges_by_shadow(shadow_id: $shadow_id) {
      ...Shadow
      author {
        ...Author
      }
    }
  }
`;

export const MOVIE_NEXT_URGES_BY_MOVIE = gql`
  query shadowNextUrgesByShadow($shadow_id: ID!) {
    shadow_next_urges_by_shadow(shadow_id: $shadow_id) {
      ...Shadow
      author {
        ...Author
      }
    }
  }
`;

export const REVIEWS_PAGINATED = gql`
  query reviewsPaginated(
    $type: ReviewMedium
    $type_id: ID
    $query: PaginatedQuery
  ) {
    reviews_paginated(type: $type, type_id: $type_id, query: $query) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...Review
          author {
            ...Author
          }
        }
      }
    }
  }
`;
