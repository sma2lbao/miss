import { gql } from "@apollo/client";

export const CURRENT_TOPIC = gql`
  query currentTopic {
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
          ...Author
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
          ...Author
        }
      }
    }
  }
`;

export const MOVIE_URGES = gql`
  query movieUrges {
    movie_urges {
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