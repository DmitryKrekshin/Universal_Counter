import React, {useState} from 'react';
import CategoryList from "../Controls/CategoryList";
import {View} from "react-native";
import {useFocusEffect} from "@react-navigation/native";
import {GetCategories} from "../../Services/CategoryService";

const CategoryListScreen = ({navigation}) => {
  const [categories, setCategories] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      async function main() {
        let categories = await GetCategories();
        categories.forEach(f => f.onClickAction = () => {
          const {onClickAction, ...category} = f;
          navigation.navigate('AddValueToCategoryScreen', category);
        });
        setCategories(categories);
      }

      main();
    }, [])
  );

  return (
    <View>
      <CategoryList categories={categories}/>
    </View>
  );
}

export default CategoryListScreen;
