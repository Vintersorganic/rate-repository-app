import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput name="text" placeholder="Review" />
      <Pressable style={styles.signinContainer} onPress={onSubmit}>
        <Text
          style={{ textAlign: "center" }}
          color="white"
          fontWeight="bold"
          fontSize="subheading"
        >
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  signinContainer: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    margin: 10,
    borderRadius: 4,
  },
});
