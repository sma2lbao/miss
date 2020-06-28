import { gql } from "@apollo/client";

export const TOP_MOVIES = gql`
  query {
    top_movies {
      title
    }
  }
`;

export const RECOMMEND_MOVIES = gql`
  query {
    recommend_movies {
      id
      title
      sub_title
      posters
      create_at
      author {
        username
        nickname
        avatar
      }
      sources {
        duration
      }
    }
  }
`;

export const MOVIE = gql`
  query($id: Int!) {
    movie(id: $id) {
      title
      cover
      posters
      actors
      description
      author {
        nickname
        avatar
      }
    }
  }
`;
