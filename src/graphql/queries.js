import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          name
          ownerName
          createdAt
          fullName
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          description
          language
          ownerAvatarUrl,
          url
        }
        cursor
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      username
      id
    }
  }
`;

export const REPOSITORY = gql`
  query {
    repository(id: $repositoryId) {
      id
      ownerName
      createdAt
      fullName
      reviewCount
      ratingAverage
      forksCount
      stargazersCount
      description
      language
      ownerAvatarUrl
      url
    }
  }
`;
