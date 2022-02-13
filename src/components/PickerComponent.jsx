import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PickerComponent = ({ sortOption, setSortOption }) => {
  return (
    <View>
      <Picker
        onValueChange={(value, index) => setSortOption(value)}
        selectedValue={sortOption}
      >
        <Picker.Item
          label="Latest repository"
          value={{
            orderDirection: "DESC",
            orderBy: "CREATED_AT",
          }}
        />
        <Picker.Item
          label="Highest rated repository"
          value={{
            orderDirection: "DESC",
            orderBy: "RATING_AVERAGE",
          }}
        />
        <Picker.Item
          label="Lowest rated repository"
          value={{
            orderDirection: "ASC",
            orderBy: "RATING_AVERAGE",
          }}
        />
      </Picker>
    </View>
  );
};

export default PickerComponent;
