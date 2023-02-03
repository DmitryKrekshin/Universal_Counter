import React from 'react';
import {View} from "react-native";
import {Button, Text} from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome5";

const CategoryEditHeader = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#435ece'}} >
      <Button size='lg' type='clear' onPress={() => {}}>
        <Icon name='arrow-left' color='white' size={20}></Icon>
      </Button>
      <Text h3={true} style={{color: 'white'}}>Изменить категории</Text>
    </View>
  )
}

export default CategoryEditHeader;
