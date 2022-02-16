import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Searchbar } from 'react-native-paper';


const HeaderComponent = ({ sortOption, setSortOption, searchQuery, setSearchQuery }) => {
  

  const onChangeSearch = query => setSearchQuery(query);

  console.log(searchQuery);
  return (
    <View>
       <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      <Picker
        onValueChange={(value, index) => {
         
          setSortOption(value);
        }}
        selectedValue={sortOption}
      >
        <Picker.Item label="Latest repositories" value="CREATED_AT ASC" />
        <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE DESC" />
        <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE ASC" />
      </Picker>
    </View>
  );
};

export default HeaderComponent;
