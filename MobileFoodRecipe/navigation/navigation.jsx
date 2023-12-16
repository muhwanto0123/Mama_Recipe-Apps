/* eslint-disable prettier/prettier */
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

import Home from '../src/pages/home.page';
import DetailRecipe from '../src/pages/DetailRecipe.page';
import Login from '../src/pages/Login.page';
import Register from '../src/pages/Register.page';
import Profile from '../src/pages/Profile.page';

import Category from '../src/components/Category.component';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tab_Navigation() {
  // const getUser = async () => {
  //   try {
  //     const user = await AsyncStorage.getItem('user');
  //     return user;
  //   } catch (error) {
  //     return error;
  //   }
  // };
  // const [dataUser, setUser] = React.useState('');
  // const [dataUser, setDataUser] = React.useState([]);

  const [dataUser, setUser] = React.useState(null);

  (async () => {
    const user = await AsyncStorage.getItem('user');
    setUser(user);
  })();

  // React.useEffect(() => {
  //   profileUser();
  //   // const user = await AsyncStorage.getItem('user');
  //   // if (user){
  //   //   setDataUser(user)
  //   // }
  // }, []);
  // const profileUser = async () => {
  //   firestore()
  //     .collection('users')
  //     .get()
  //     .then(querySnapshot => {
  //       let tempData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         tempData.push(documentSnapshot);
  //         // console.log(documentSnapshot)
  //       });
  //       setDataUser(tempData[0]);
  //     });
  // };
  // console.log(dataUser)
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {!dataUser ? (
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({color}) => (
              <Icons name="login" color={color} size={26} />
            ),
          }}
        />
      ) : null}
      <Tab.Screen
        name="Home "
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icons name="home" color={color} size={26} />
          ),
        }}
      />
      {!dataUser ? (
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            tabBarLabel: 'Register',
            tabBarIcon: ({color}) => (
              <Icons name="account-plus" color={color} size={26} />
            ),
          }}
        />
      ) : null}
      {dataUser ? (
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <Icons name="account-box" color={color} size={26} />
            ),
          }}
        />
      ) : null}

      {/* <Tab.Screen
        name="Home "
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icons name="home" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Tab_Navigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailRecipe}
        options={{headerShown: false}}
        style={{padding: 10}}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
