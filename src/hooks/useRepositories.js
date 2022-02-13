import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useState } from "react";

const useRepositories = (variables) => {
  

  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
    // Other options)
  })

  return { repositories: data ? data.repositories : undefined , loading, error };
};

export default useRepositories;
