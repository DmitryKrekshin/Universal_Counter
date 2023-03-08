import React from "react";
import { Button, Text } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View } from "react-native";

const Category = props => {
  const category = props.category;
  const onClickAction = props.onClick;

  return (
    <View style={{flexDirection: "column"}}>
      <Button
        buttonStyle={{
          width: 70,
          height: 70,
          borderRadius: 70,
          margin: 10,
          backgroundColor: category.ColorHEX,
        }}
        onPress={() => {
          if (typeof onClickAction !== "undefined") {
            onClickAction();
          }
        }}>
        <Icon name={category.IconName} size={40} />
      </ Button>
      <Text style={{textAlign: 'center', maxWidth: 90}}>
        {category.Value} {category.MeasurementUnitName}
      </Text>
    </View>
  );
};

export default Category;
