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

import Navigation from '../navigation/navigation';

function App() {
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
        <Navigation />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
