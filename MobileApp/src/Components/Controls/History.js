import React from "react";
import {Pressable, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const History = props => {
  const categoryHistory = props.categoryHistory;
  const onClickAction = props.onClick;

  return (
    <Pressable onPress={() => {
      if(typeof onClickAction !== "undefined"){
        onClickAction();
      }
    }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Icon name={categoryHistory.IconName} color={categoryHistory.ColorHEX} />
        </View>
        <View style={{flex: 5}}>
          <Text>{categoryHistory.Name}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>{categoryHistory.Value}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default History;
