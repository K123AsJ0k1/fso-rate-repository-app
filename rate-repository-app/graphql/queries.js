import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Query(
    $searchKeyword: String
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ) {
    repositories(
      searchKeyword: $searchKeyword
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const CHECK_USER_INFO = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const GET_REPO = gql`
  query Get_Repo($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
    }
  }
`;
/*
export const GET_REVIEWS = gql`
  query Get_Reviews($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
*/

export const GET_REVIEWS = gql`
  query Query($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      id
      fullName
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export const SEARCH_REPO = gql`
  query Query($searchKeyword: String) {
    repositories(searchKeyword: $searchKeyword) {
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`;
