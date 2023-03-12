import React from "react";
import History from "./History";
import {View} from "react-native";

const HistoryList = props => {
  const category = props.categoryHistories.category;
  const histories = props.categoryHistories.histories;

  return (
    <View>
      {histories ? histories.map(history => <History categoryHistory={{
        category: category,
        history: history
      }}/>) : undefined}
    </View>
  );
}

export default HistoryList;
