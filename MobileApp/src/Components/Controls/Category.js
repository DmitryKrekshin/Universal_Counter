import React from "react";
import { Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome5";

const Category = props => {
  const category = props.category;

  return (
    <Button
      id={category.Id}
      title={category.Name}
      buttonStyle={{
        width: 70,
        height: 70,
        borderRadius: 70,
        margin: 10,
        backgroundColor: category.ColorHEX
      }}
      onPress={() => {
        if(typeof category.onClickAction === 'function'){
          category.onClickAction();
        }
      }}>
      <Icon name={props.category.IconName} size={40} />
    </ Button>
  );
};

export default Category;
