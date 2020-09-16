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
      alias_title
      region
      ...Movie
      sources {
        ...MovieSource
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
          ...Movie
          author {
            ...Author
          }
        }
      }
    }
  }
`;

export const USER_MOVIES_PAGINATED = gql`
  query userMoviesPaginated($author_username: String!, $query: PaginatedQuery) {
    user_movies_paginated(author_username: $author_username, query: $query) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...Movie
          author {
            ...Author
          }
        }
      }
    }
  }
`;

export const MOVIE_URGES_BY_MOVIE = gql`
  query movieUrgesByMovie($movie_id: ID!) {
    movie_urges_by_movie(movie_id: $movie_id) {
      ...Movie
      author {
        ...Author
      }
    }
  }
`;

export const MOVIE_NEXT_URGES_BY_MOVIE = gql`
  query movieNextUrgesByMovie($movie_id: ID!) {
    movie_next_urges_by_movie(movie_id: $movie_id) {
      ...Movie
      author {
        ...Author
      }
    }
  }
`;
