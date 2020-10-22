import { gql } from "@apollo/client";

export const CREATE_MOVIE = gql`
  mutation createShadow($shadow: CreateShadowInput!) {
    create_shadow(shadow: $shadow) {
      create_at
    }
  }
`;

export const UPDATE_MOVIE = gql`
  mutation updateShadow($shadow: UpdateShadowInput!, $shadow_id: ID!) {
    update_shadow(shadow_id: $shadow_id, shadow: $shadow) {
      create_at
    }
  }
`;

export const ADD_MEDIUMS_TO_MOVIE = gql`
  mutation addMediumsToShadow(
    $shadow_id: ID!
    $shadow_medium: CreateShadowMediumInput!
  ) {
    add_mediums_to_shadow(
      shadow_id: $shadow_id
      shadow_medium: $shadow_medium
    ) {
      sources {
        name
      }
    }
  }
`;
