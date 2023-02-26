import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryListScreen from "../Screens/CategoryListScreen";
import { Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome5";
import EditCategoriesScreen from "../Screens/EditCategoriesScreen";
import CategoryUpsertScreen from "../Screens/CategoryUpsertScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const CategoriesStackNavigator = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName === "CategoryUpsert" || routeName === "EditCategoriesScreen") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  });

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="CategoryListScreen" component={CategoryListScreen} options={{
          title: "Ваши категории",
          headerRight: () => (
            <Button size="lg" type="clear" onPress={() => {
              navigation.navigate("EditCategoriesScreen");
            }}>
              <Icon name="pencil-alt" color="black" size={20} />
            </Button>
          ),
        }} />
        <Stack.Screen name="EditCategoriesScreen" component={EditCategoriesScreen} options={{
          title: "Редактирование категорий",
        }} />
        <Stack.Screen name="CategoryUpsert" component={CategoryUpsertScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default CategoriesStackNavigator;
