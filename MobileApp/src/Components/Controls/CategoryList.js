import React from "react";
import {View} from "react-native";
import Category from "./Category";

// Чтобы установить действия которые выполняется по нажатию на иконку категории нужно в передаваемого объекте категории указать onClickAction, которая должна быть функцией
const CategoryList = props => {
  const categories = props.categories;

  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%'}}>
      {categories ? categories.map(category => <Category category={category} key={category.Id} onClick={category.onClickAction}/>) : ''}
    </View>
  );
}

export default CategoryList;
