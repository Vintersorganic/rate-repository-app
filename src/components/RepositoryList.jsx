import { useState } from "react";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { useDebounce } from "use-debounce";

const RepositoryList = () => {
  const [sortOption, setSortOption] = useState("CREATED_AT ASC");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedText] = useDebounce(searchQuery, 500);
  let sortArray = sortOption.split(" ");

  let object = {
    orderBy: sortArray[0],
    orderDirection: sortArray[1],
    searchKeyword: debouncedText,
    first: 8,
  };


  const { repositories, loading, fetchMore  } = useRepositories(object);

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      sortOption={sortOption}
      setSortOption={setSortOption}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
