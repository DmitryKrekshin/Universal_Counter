import React from 'react';
import CategoryList from "../Controls/CategoryList";
import {View} from "react-native";
import ViewMode from "../Enums/ViewMode";

const CategoryListScreen = () => {
  return (
    <View>
      <CategoryList viewMode={ViewMode.View}/>
    </View>
  );
}

export default CategoryListScreen;
