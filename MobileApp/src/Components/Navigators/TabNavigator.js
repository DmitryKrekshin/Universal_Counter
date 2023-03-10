import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesStackNavigator from "./CategoriesStackNavigator";
import HistoryListScreen from "../Screens/HistoryListScreen";

const BottomTabNavigator = createBottomTabNavigator();

const TabNavigator = () => {
  return ( //todo не забыть убрать id 11
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen name='Categories' component={CategoriesStackNavigator} options={{headerShown: false}}/>
      <BottomTabNavigator.Screen name='ForTesting' component={HistoryListScreen} initialParams={{categoryId: 11}}/>
    </BottomTabNavigator.Navigator>
  );
}

export default TabNavigator;
