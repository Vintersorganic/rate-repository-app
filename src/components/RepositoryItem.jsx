import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";

const fixedNumber = (num) => {
  return num > 1000 ? (num / 1000).toFixed(1) + "k" : num;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 3,
  },
  top: {
    flexDirection: "row",
    margin: 10,
  },
  topRight: {
    marginLeft: 15,
    alignItems: "flex-start",
  },
  languageContainer: {
    marginTop: 5,
    borderRadius: 5,
    padding: 5,
    backgroundColor: theme.colors.primary,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 9
  },
  bottomTextContainer: {
    alignItems: 'center',
  }
});

const TopPart = ({ uri, name, description, language }) => {
  return (
    <View style={styles.top}>
      <Image
        style={styles.image}
        source={{
          uri,
        }}
      />
      <View style={styles.topRight}>
        <Text fontWeight="bold">{name}</Text>
        <Text color="textSecondary" style={{ marginTop: 5 }}>
          {description}
        </Text>
        <Text color="white" fontWeight="bold" style={styles.languageContainer}>
          {language}
        </Text>
      </View>
    </View>
  );
};


const BottomPart = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  return (
    <View style={styles.bottom}>
      <BottomPartContainer content={stargazersCount} text="Stars"/>
      <BottomPartContainer content={forksCount} text="Forks"/>
      <BottomPartContainer content={reviewCount} text="Reviews"/>
      <BottomPartContainer content={ratingAverage} text="Rating"/>
    </View>
  );
};

const BottomPartContainer = ({content, text}) => {
    return (
      <View style={styles.bottomTextContainer}>
        <Text fontWeight="bold">{fixedNumber(content)}</Text>
        <Text color="textSecondary">{text}</Text>
      </View>
    )
  }

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <TopPart
        uri={item.ownerAvatarUrl}
        name={item.fullName}
        description={item.description}
        language={item.language}
      />
      <BottomPart
        stargazersCount={item.stargazersCount}
        forksCount={item.forksCount}
        reviewCount={item.reviewCount}
        ratingAverage={item.ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
