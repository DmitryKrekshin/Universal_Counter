import React from "react";
import {Pressable, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import {Text} from "@rneui/themed";

const History = props => {
  const category = props.categoryHistory.category;
  const history = props.categoryHistory.history;
  const onClickAction = props.onClick;

  return (
    <Pressable onPress={() => {
      if(typeof onClickAction !== "undefined"){
        onClickAction();
      }
    }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Icon name={category.IconName} color={category.ColorHEX} />
        </View>
        <View style={{flex: 5}}>
          <Text>{category.Name}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>{history.Value}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default History;
