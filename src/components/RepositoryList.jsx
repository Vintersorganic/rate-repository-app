
import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});



const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];




  return (
    <View style={{flex:1}}>
      {loading && <Text>Loading...</Text> }
     <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      keyExtractor={item => item.id}
     
    /> 
    </View>
  );
};

export default RepositoryList;
  