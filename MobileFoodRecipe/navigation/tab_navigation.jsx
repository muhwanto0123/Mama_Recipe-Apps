/* eslint-disable prettier/prettier */
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../src/pages/home.page';
import DetailRecipe from '../src/pages/DetailRecipe.page';
import Login from '../src/pages/Login.page';
import Register from '../src/pages/Register.page';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        // options={{headerShown: false}} 
      />
      <Tab.Screen
        name="Login"
        component={Login}
        // options={{headerShown: false}}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        // options={{headerShown: false}}
      />
      <Tab.Screen
        name="Detail"
        component={DetailRecipe}
        // options={{headerShown: false}}
        // style={{padding: 10}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;