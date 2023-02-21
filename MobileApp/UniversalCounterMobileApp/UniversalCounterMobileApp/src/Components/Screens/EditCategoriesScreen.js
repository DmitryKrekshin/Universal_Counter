import React from 'react';
import {View} from "react-native";
import CategoryList from "../Controls/CategoryList";
import ViewMode from "../Enums/ViewMode";

const EditCategoriesScreen = () => {
  return (
    <View>
      <CategoryList viewMode={ViewMode.Edit} />
    </View>
  );
}

export default EditCategoriesScreen;
