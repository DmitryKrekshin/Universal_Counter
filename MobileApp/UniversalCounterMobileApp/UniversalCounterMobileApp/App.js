import React from 'react';
import {
  StatusBar, View, Text
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesPage from "./src/Components/Pages/CategoriesPage";
import CategoriesEditModal from "./src/Components/Pages/CategoriesEditModal";
import Icon from "react-native-vector-icons/FontAwesome5";
import {Button} from "@rneui/themed";
import AddCategoryModal from "./src/Components/Pages/AddCategoryModal";

const Tab = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function Test() {
  return (
    <View>
      <Text>
        Test
      </Text>
    </View>
  )
}

function CategoryTabs() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Group>
        <BottomTab.Screen name='CategoryList' component={CategoriesPage} options={{
          title: 'Ваши категории',
          headerRight: () => (
            <Button size='lg' type='clear'>
              <Icon name='pencil-alt' color='black' size={20}/>
            </Button>
          )
        }}/>
        <BottomTab.Screen screenOptions={{headerShown: false}} name='Test' component={Test}/>
      </BottomTab.Group>
    </BottomTab.Navigator>
  )
}

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Group>
            <Tab.Screen name='CategoryScreen' options={{headerShown: false}} component={CategoryTabs}/>
          </Tab.Group>
          <Tab.Group screenOptions={{presentation: 'modal', animationEnabled: false}}>
            <Tab.Screen name='EditCategoriesModal' component={CategoriesEditModal} options={{title: 'Изменить категории'}}/>
          </Tab.Group>
          <Tab.Group screenOptions={{presentation: 'modal'}}>
            <Tab.Screen name='AddCategoryModal' component={AddCategoryModal} options={{title: 'Добавить категорию'}} />
          </Tab.Group>
        </Tab.Navigator>
      </NavigationContainer>

    </>
  )
    ;
};

export default App;
