import React, {useState} from 'react';
import CategoryList from "../Controls/CategoryList";
import {View} from "react-native";
import {useFocusEffect} from "@react-navigation/native";
import {GetCategories} from "../../Services/CategoryService";

const CategoryListScreen = ({navigation}) => {
  const [categories, setCategories] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      GetCategories((categories) => {
        categories.forEach(f => f.onClickAction = () => {
          const {onClickAction, ...category} = f;
          navigation.navigate('AddValueToCategoryScreen', category);
        });
        setCategories(categories);
      });
    }, [])
  );

  return (
    <View>
      <CategoryList categories={categories} />
    </View>
  );
}

export default CategoryListScreen;
