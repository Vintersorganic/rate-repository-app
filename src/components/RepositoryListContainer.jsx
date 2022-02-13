import { useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import ItemSeparator from "./ItemSeparator";
import PickerComponent from "./PickerComponent";
import RepositoryItem from "./RepositoryItem";


const RepositoryListContainer = ({ repositories, loading, sortOption, setSortOption }) => {
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
        ListHeaderComponent={<PickerComponent sortOption={sortOption} setSortOption={setSortOption}/>}
      />
    </View>
  );
};

export default RepositoryListContainer;
