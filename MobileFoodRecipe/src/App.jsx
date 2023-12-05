/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';

import {createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabNavigator from '../navigation/tab_navigation';

// import Home from './pages/home.page';
// import DetailRecipe from './pages/DetailRecipe.page';
// import Login from './pages/Login.page';
// import Register from './pages/Register.page';

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
//       <Tab.Screen
//         name="Login"
//         component={Login}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="Register"
//         component={Register}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="Detail"
//         component={DetailRecipe}
//         options={{headerShown: false}}
//         style={{padding: 10}}
//       />
//     </Tab.Navigator>
//   );
// };

function App() {
  // const Stack = createStackNavigator()

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getToken();
      console.log('Authorization status:', authStatus);
    }
  };

  const getToken = async () => {
    const token = await messaging().getToken();
    firestore().collection('tokenlist').doc(token).set({});
  };

  React.useEffect(() => {
    requestUserPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavigationContainer>
      <PaperProvider>
        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={DetailRecipe}
            options={{headerShown: false}}
            style={{padding: 10}}
          />
        </Stack.Navigator> */}
        <TabNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
