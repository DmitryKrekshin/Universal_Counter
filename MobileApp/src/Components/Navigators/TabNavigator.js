import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesStackNavigator from "./CategoriesStackNavigator";
import CategoryListScreen from "../Screens/CategoryListScreen";

const BottomTabNavigator = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen name='Categories' component={CategoriesStackNavigator} options={{headerShown: false}} />
      <BottomTabNavigator.Screen name='ForTesting' component={CategoryListScreen} />
    </BottomTabNavigator.Navigator>
  );
}

export default TabNavigator;
