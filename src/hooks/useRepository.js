import { useQuery } from "@apollo/client";
import { REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { loading, error, data } = useQuery(REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });

  return { repository: data ? data.repository : undefined, loading, error };
};

export default useRepository;
