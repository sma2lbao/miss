import { gql } from "@apollo/client";

export const CREATE_SHADOW = gql`
  mutation createShadow($shadow: CreateShadowInput!) {
    create_shadow(shadow: $shadow) {
      create_at
    }
  }
`;

export const UPDATE_SHADOW = gql`
  mutation updateShadow($shadow: UpdateShadowInput!, $shadow_id: ID!) {
    update_shadow(shadow_id: $shadow_id, shadow: $shadow) {
      create_at
    }
  }
`;

export const ADD_MEDIUMS_TO_SHADOW = gql`
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

export const CREATE_OR_UPDATE_VOTE = gql`
  mutation createOrUpdateVote($vote: CreateVoteInput!) {
    create_or_update_vote(vote: $vote) {
      status
    }
  }
`;

export const VOTE = gql`
  query vote($medium_id: ID!) {
    vote(medium_id: $medium_id) {
      status
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
    create_review(review: $review) {
      id
    }
  }
`;
