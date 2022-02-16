import React from "react";
import { View, FlatList, StyleSheet, Pressable, Alert } from "react-native";
import useRepository from "../hooks/useRepository";
import ItemSeparator from "./ItemSeparator";
import { format, parseISO } from "date-fns";
import theme from "../theme";
import Text from "./Text";
import { useMutation, useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import { useNavigate } from "react-router-native";
import { DELETE_REVIEW } from "../graphql/mutations";

const ReviewItem = ({ review }) => {
  const { createdAt, rating, text, user, repository, id } = review;
  const formatedDate = format(parseISO(createdAt), "MM.dd.yyyy");
  const navigate = useNavigate()
  const [mutate] = useMutation(DELETE_REVIEW, {
  });

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.upperContainer}>
        <View style={styles.ratingCircle}>
          <Text color="primary" fontWeight="bold">
            {rating}
          </Text>
        </View>
        <View style={styles.rightColumn}>
          <Text fontWeight="bold">
            {repository.id ? repository.id : user.username}
          </Text>
          <Text color="textSecondary">{formatedDate}</Text>
          <View style={styles.reviewText}>
            <Text>{text}</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.leftButton}
          onPress={() => {
            navigate('/repository/' + repository.id)
          }}
        >
          <Text color="white" fontWeight="bold" fontSize="subheading">
            View repository
          </Text>
        </Pressable>
        <Pressable
          style={styles.rightButton}
          onPress={() => {
            Alert.alert(
              "Delete review",
              "Are you sure you want to delete this review?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                },
                { text: "DELETE", onPress: () => mutate({ variables: { id } }) }
              ]
            );
          }}
        >
          <Text color="white" fontWeight="bold" fontSize="subheading">
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const MyReviews = () => {
  const { data, loading } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
    refetchQueries: [{ query: ME }],
  });

  const repositoryNodes = data
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
      <FlatList
        data={repositoryNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
      />
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: theme.colors.white,
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
  buttonsContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginBottom: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  leftButton: {
    backgroundColor: theme.colors.primary,
    flex: 1,
    padding: 15,
    alignItems: "center",
    borderRadius: 3,
    marginRight: 3
  },
  rightButton: {
    backgroundColor: theme.colors.red,
    flex: 1,
    padding: 15,
    alignItems: "center",
    borderRadius: 3,
    marginLeft: 3
  },
  upperContainer: {
    flexDirection: "row",
    padding: 10,  
  },
});

export default MyReviews;
