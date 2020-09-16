import { gql } from "@apollo/client";

export const CURRENT_TOPIC = gql`
  query currentTopic {
    current_topic {
      id
      title
      description
      top_movies {
        ...Movie
        author {
          ...Author
        }
      }
      top_movie {
        ...Movie
        author {
          ...Author
        }
      }
    }
  }
`;

export const MOVIE_URGES = gql`
  query movieUrges {
    movie_urges {
      ...Movie
      author {
        ...Author
      }
    }
  }
`;

export const USER_URGES = gql`
  query userUrges {
    user_urges {
      nickname
      avatar
      username
      uid
      description
    }
  }
`;
