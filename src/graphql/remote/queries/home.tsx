import { gql } from "@apollo/client";

export const CURRENT_TOPIC = gql`
  query currentTopic {
    current_topic {
      id
      title
      description
      top_shadows {
        ...Shadow
        author {
          ...Author
        }
      }
      top_shadow {
        ...Shadow
        author {
          ...Author
        }
      }
    }
  }
`;

export const SHADOW_URGES = gql`
  query shadowUrges {
    shadow_urges {
      ...Shadow
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
