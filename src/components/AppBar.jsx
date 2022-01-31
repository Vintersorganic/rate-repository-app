import { View, StyleSheet, ScrollView} from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackground,
    paddingBottom: 15,
    paddingLeft: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
      <AppBarTab text='Repositories' url='/'/>
      <AppBarTab text='Sign In' url='/signin'/>
      </ScrollView>
      
    </View>
  );
};

export default AppBar;
