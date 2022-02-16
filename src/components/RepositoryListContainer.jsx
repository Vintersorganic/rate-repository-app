import { useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import ItemSeparator from "./ItemSeparator";
import HeaderComponent from "./HeaderComponent";
import RepositoryItem from "./RepositoryItem";


const RepositoryListContainer = ({ repositories, loading, sortOption, setSortOption, searchQuery, setSearchQuery, onEndReach }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <View testID="repositoryItem" style={{ flex: 1 }}>
      {loading && <Text>Loading...</Text>}
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<HeaderComponent searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} sortOption={sortOption} setSortOption={setSortOption}/>}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}

      />
    </View>
  );
};

export default RepositoryListContainer;
