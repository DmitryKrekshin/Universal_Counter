import React, {useState} from 'react';
import {View} from "react-native";
import {Input, Text} from "@rneui/themed";

const CategoryModal = props => {
  const [name, SetName] = useState('');
  const [measurementUnitId, SetMeasurementUnitId] = useState(-1);
  const [iconName, SetIconName] = useState('');
  const [colorHEX, SetColorHEX] = useState('');

  return (
    <View>
      <Text h4={true}>Имя категории</Text>
      <Input value={name} onChangeText={(value) => SetName(value)} />


    </View>
  )
}

export default CategoryModal;
