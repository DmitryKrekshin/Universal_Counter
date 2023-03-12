import React, {useState} from 'react';
import {useFocusEffect} from "@react-navigation/native";
import {GetCategoryHistory} from "../../Managers/CategoryManager";
import HistoryList from "../Controls/HistoryList";

const HistoryListScreen = ({navigation, route}) => {
  const categoryId = route.params.categoryId;

  const [categoryHistories, setCategoryHistories] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      async function main() {
        await setCategoryHistories(await GetCategoryHistory(categoryId));
      }

      main();
    }, [])
  );

  return (
    <HistoryList categoryHistories={categoryHistories}/>
  );
}

export default HistoryListScreen;
