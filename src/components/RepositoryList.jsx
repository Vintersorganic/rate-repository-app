import { useState } from "react";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [sortOption, setSortOption] = useState({
    orderDirection: "DESC",
    orderBy: "CREATED_AT",
  });
  
  const { repositories, loading } = useRepositories(sortOption);

  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      sortOption={sortOption}
      setSortOption={setSortOption}
    />
  );
};

export default RepositoryList;
