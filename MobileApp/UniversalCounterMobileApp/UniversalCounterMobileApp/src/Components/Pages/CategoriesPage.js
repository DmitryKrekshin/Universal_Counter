import React, {useEffect} from 'react';
import CategoryList from "../Controls/CategoryList";
import {View} from "react-native";
import ViewMode from "../Enums/ViewMode";
import Icon from "react-native-vector-icons/FontAwesome5";
import {Button} from "@rneui/themed";

const CategoriesPage = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button size='lg' type='clear' onPress={() => {
          navigation.navigate('EditCategoriesModal');
        }}>
          <Icon name='pencil-alt' color='black' size={20}/>
        </Button>
      )
    })
  }, [navigation])

  return (
    <View>
      <CategoryList viewMode={ViewMode.View}/>
    </View>
  );
}

export default CategoriesPage;
