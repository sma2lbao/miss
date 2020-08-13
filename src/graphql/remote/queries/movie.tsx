import { gql } from "@apollo/client";

export const MOVIE = gql`
  query movie($id: ID!) {
    movie(id: $id) {
      credits {
        avatar
        name
        description
      }
      author {
        ...Author
      }
      cover
      title
      update_at
      sub_title
      id
      description
      create_at
      alias_title
      posters
      region
      sources {
        url
        super_quality_url
        preview_url
        posters
        name
        medium_quality_url
        low_quality_url
        id
        high_quality_url
        duration
        description
        alias_name
        create_at
        update_at
      }
    }
  }
`;

export const MOVIES_PAGINATED = gql`
  query moviesPaginated($query: PaginatedQuery) {
    movies_paginated(query: $query) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          title
          sub_title
          alias_title
          cover
          description
          author {
            ...Author
          }
        }
      }
    }
  }
`;

export const movie_urges_by_movie = gql`
  query movieUrgesByMovie($movie_id: ID!) {
    movie_urges_by_movie(movie_id: $movie_id) {
      title
      sub_title
      cover
      description
      author {
        ...Author
      }
    }
  }
`;