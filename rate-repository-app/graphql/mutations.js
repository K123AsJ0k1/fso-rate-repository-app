import { gql } from "@apollo/client";

export const AUTH = gql`
  mutation ($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const REVIEW = gql`
  mutation Mutation($review: CreateReviewInput) {
    createReview(review: $review) {
      text
      rating
    }
  }
`;

export const CREATE_USER = gql`
  mutation Mutation($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation Mutation($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;
