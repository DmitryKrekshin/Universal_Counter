import React, {useEffect, useState} from "react";
import {GetCategories} from "../../Services/CategoryService";
import {View} from "react-native";
import Category from "./Category";
import {Button} from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome5";
import ViewMode from "../Enums/ViewMode";
import {useNavigation} from "@react-navigation/native";

const CategoryList = props => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GetCategories((categories) => {
      setCategories(categories);
    });
  }, []);

  const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%'}}>
      {categories ? categories.map(category => <Category category={category}/>) : 'loader'}
      {props.viewMode === ViewMode.Edit ?
        <Button buttonStyle={{
          width: 70,
          height: 70,
          borderRadius: 70,
          margin: 10
        }}
        onPress={() => {navigation.navigate('AddCategoryModal')}}>
          <Icon name='plus' color='white' size={20}/>
        </Button>
        : ''}
    </View>
  );
}

export default CategoryList;
