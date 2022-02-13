import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy) {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy) {
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
  query ($id: ID!){
    repository(id: $id) {
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
      reviews {
      totalCount
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            username
            id
          }
        }
      }
    }
    }
  }
`;
