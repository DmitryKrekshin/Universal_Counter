import React from "react";
import History from "./History";
import {View} from "react-native";

const HistoryList = props => {
  const categoryHistories = props.categoryHistories;

  return (
    <View>
      {typeof categoryHistories === "Array" ? categoryHistories.map(categoryHistory => <History categoryHistory={categoryHistory}/>) : undefined}
    </View>
  );
}

export default HistoryList;
