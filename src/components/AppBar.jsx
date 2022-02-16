import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";
import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackground,
    paddingVertical: 15,
    paddingLeft: 10,
  },
});

const AppBar = () => {
  let authUser = null;

  const { data } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  if (data) {
    console.log(data.me);
    authUser = data.me;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" url="/" />
        {authUser && <AppBarTab text="Create a Review" url="/review" />}
        {authUser && <AppBarTab text="My Reviews" url="/myreviews" />}
        {authUser ? (
          <AppBarTab text="Sign Out" url="/" />
        ) : (
          <AppBarTab text="Sign In" url="/signin" />
        )}
        {!authUser && <AppBarTab text="Sign Up" url="/signup" />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
