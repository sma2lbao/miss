import { gql } from "@apollo/client";

export const PLAYLISTS_PAGINATED = gql`
  query playlistsPaginated(
    $query: PaginatedQuery
    $author_uid: String
    $author_username: String
  ) {
    playlists_paginated(
      query: $query
      author_uid: $author_uid
      author_username: $author_username
    ) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          title
          description
          cover
          create_at
        }
      }
    }
  }
`;
