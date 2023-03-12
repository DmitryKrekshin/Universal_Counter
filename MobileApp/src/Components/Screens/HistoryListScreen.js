import React, {useState} from 'react';
import {useFocusEffect} from "@react-navigation/native";
import {GetCategoryHistories} from "../../Managers/CategoryManager";
import HistoryList from "../Controls/HistoryList";

const HistoryListScreen = ({navigation, route}) => {
  const categoryId = route.params.categoryId;

  const [categoryHistories, setCategoryHistories] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      GetCategoryHistories(categoryId, (categoryHistories) => {
        setCategoryHistories(categoryHistories);
      });
    }, [])
  );

  return (
    <HistoryList categoryHistories={categoryHistories}/>
  );
}

export default HistoryListScreen;
