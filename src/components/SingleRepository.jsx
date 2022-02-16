import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import { format, parseISO } from "date-fns";
import theme from "../theme";
import Text from "./Text";

const RepositoryInfo = ({ repository, loading }) => {
  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={{ marginBottom: 10 }}>
      <RepositoryItem item={repository} linkButton={true} />
    </View>
  );
};

const ReviewItem = ({ review }) => {
  const { createdAt, rating, text, user } = review;
  const formatedDate = format(parseISO(createdAt), "MM.dd.yyyy");

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingCircle}>
        <Text color="primary" fontWeight="bold">
          {rating}
        </Text>
      </View>
      <View style={styles.rightColumn}>
        <Text fontWeight="bold">{user.username}</Text>
        <Text color="textSecondary">{formatedDate}</Text>
        <View style={styles.reviewText}>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const params = useParams();
  const { repository, loading, fetchMore } = useRepository({
    id: params.id,
    first: 5
  });

  const repositoryNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryInfo repository={repository} loading={loading} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={() => fetchMore()}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  rightColumn: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
    marginRight: 15,
    flex: 1,
  },
  ratingCircle: {
    marginLeft: 5,
    width: 45,
    height: 45,
    borderRadius: 100 / 2,
    borderColor: theme.colors.primary,
    borderWidth: 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
  reviewText: {
    marginVertical: 4,
  },
});

export default SingleRepository;
