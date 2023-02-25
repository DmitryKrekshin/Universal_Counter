import React, {useState} from "react";
import {GetCategories} from "../../Services/CategoryService";
import {View} from "react-native";
import Category from "./Category";
import {Button} from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome5";
import ViewMode from "../Enums/ViewMode";
import {useFocusEffect, useNavigation} from "@react-navigation/native";

const CategoryList = props => {
  const [categories, setCategories] = useState([]);

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      GetCategories((categories) => {
        if (props.viewMode === ViewMode.Edit) {
          categories.forEach(f => f.onClickAction = () => {
            navigation.navigate('CategoryUpsert', { category: f, viewMode: ViewMode.Edit });
          });
        }

        setCategories(categories);
      });
    }, [])
  );

  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%'}}>
      {categories ? categories.map(category => <Category category={category} key={category.Id} />) : 'loader'}
      {props.viewMode === ViewMode.Edit ?
        <Button buttonStyle={{
          width: 70,
          height: 70,
          borderRadius: 70,
          margin: 10
        }}
                onPress={() => {
                  navigation.navigate('CategoryUpsert')
                }}>
          <Icon name='plus' color='white' size={20}/>
        </Button>
        : ''}
    </View>
  );
}

export default CategoryList;
