import React from "react";
import { Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome5";

const Category = props => {
  return (
    <Button
      key={props.category.Id}
      title={props.category.Name}
      buttonStyle={{
        width: 70,
        height: 70,
        borderRadius: 70,
        margin: 10,
        backgroundColor: props.category.ColorHEX
      }}>
      <Icon name={props.category.IconName} size={40} />
    </ Button>
  );
};

export default Category;
