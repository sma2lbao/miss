import { gql } from "@apollo/client";

export const CURRENT_TOPIC = gql`
  query {
    current_topic {
      title
      description
      top_movies {
        description
        title
        sub_title
        create_at
        update_at
        cover
        posters
        author {
          avatar
          nickname
          uid
          username
        }
      }
      top_movie {
        description
        title
        sub_title
        create_at
        update_at
        cover
        posters
        author {
          avatar
          nickname
          uid
          username
        }
      }
    }
  }
`;

export const MOVIE_URGES = gql`
  query {
    movie_urges {
      title
      sub_title
      cover
      description
      author {
        avatar
        nickname
        uid
      }
    }
  }
`;

export const MOVIES_PAGINATED = gql`
  query($first: Int, $after: Int) {
    movies_paginated(first: $first, after: $after) {
      edges {
        cursor
        node {
          cover
          author {
            avatar
            nickname
            username
            uid
          }
          sub_title
          title
        }
      }
      hasNextPage
    }
  }
`;

export const MOVIE = gql`
  query($id: ID!) {
    movie(id: $id) {
      actors {
        avatar
        name
        description
      }
      author {
        avatar
        uid
        nickname
      }
      cover
      title
      update_at
      sub_title
      id
      directors {
        avatar
        description
        name
      }
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
