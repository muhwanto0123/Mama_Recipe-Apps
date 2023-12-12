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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tab_Navigation() {
  const [email, setEmail] = React.useState('');

  // const userLogin = () => {
  //   firestore()
  //     .collection('users')
  //     .where('email', '==', email)
  //     .get()
  //     .then(async querySnapshot => {
  //       let tempData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         tempData.push(documentSnapshot);
  //       });
  //       // return await AsyncStorage.setItem(
  //       //   'user',
  //       //   console.log(JSON.stringify(tempData[0]._data)),
  //       // );
  //       console.log(tempData)
  //     });
  //     // console.log(JSON.stringify(tempData[0]._data))
  // };

  // await AsyncStorage.setItem(
  //   'user',
  //   JSON.stringify(tempData[0]._data),
  // );

  // React.useEffect(() => {
  //   if (AsyncStorage.setItem('user')) {
  //     setUser(JSON.stringify(tempData[0]._data));
  //   }
  // }, []);
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {email ? (
        <>
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
        </>
      ) : (
        <>
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
        </>
      )}
    </Tab.Navigator>
  );
}

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen name="EditPost" component={EditPost} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

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
    </Stack.Navigator>
  );
};

export default Navigation;
