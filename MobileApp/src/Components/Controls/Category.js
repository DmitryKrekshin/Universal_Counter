import React from "react";
import {Button} from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome5";

const Category = props => {
  const category = props.category;
  const onClickAction = props.onClick;

  return (
    <Button
      buttonStyle={{
        width: 70,
        height: 70,
        borderRadius: 70,
        margin: 10,
        backgroundColor: category.ColorHEX
      }}
      onPress={() => {
        if (typeof onClickAction !== "undefined") {
          onClickAction();
        }
      }}>
      <Icon name={category.IconName} size={40}/>
    </ Button>
  );
};

export default Category;
