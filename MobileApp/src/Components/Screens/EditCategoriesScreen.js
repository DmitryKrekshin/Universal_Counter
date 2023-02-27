import React, {useState} from 'react';
import {View} from "react-native";
import CategoryList from "../Controls/CategoryList";
import ViewMode from "../Enums/ViewMode";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {GetCategories} from "../../Services/CategoryService";

const EditCategoriesScreen = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      GetCategories((categories) => {
        categories.forEach(f => f.onClickAction = () => {
          const {onClickAction, ...category} = f;
          navigation.navigate('CategoryUpsertScreen', {category: category, viewMode: ViewMode.Edit});
        });

        categories.push({
          IconName: 'plus',
          IconFamily: 'FontAwesome5',
          ColorHEX: '#848891',
          onClickAction: () => {
            navigation.navigate('CategoryUpsertScreen', {viewMode: ViewMode.Create})
          }
        });

        setCategories(categories);
      });
    }, [])
  );

  return (
    <View>
      <CategoryList categories={categories}/>
    </View>
  );
}

export default EditCategoriesScreen;
