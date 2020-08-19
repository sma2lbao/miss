import { gql } from "@apollo/client";

export const CREATE_MOVIE = gql`
  mutation createMovie($movie: CreateMovieInput!) {
    create_movie(movie: $movie) {
      create_at
    }
  }
`;

export const UPDATE_MOVIE = gql`
  mutation updateMovie($movie: UpdateMovieInput!, $movie_id: ID!) {
    update_movie(movie_id: $movie_id, movie: $movie) {
      create_at
    }
  }
`;

export const ADD_MEDIUMS_TO_MOVIE = gql`
  mutation addMediumsToMovie(
    $movie_id: ID!
    $movie_medium: CreateMovieMediumInput!
  ) {
    add_mediums_to_movie(movie_id: $movie_id, movie_medium: $movie_medium) {
      sources {
        name
      }
    }
  }
`;
