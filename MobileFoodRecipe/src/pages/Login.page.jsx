/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, View, TouchableWithoutFeedback} from 'react-native';
import {Text, TextInput, Button, Avatar, Snackbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import auth from '@react-native-firebase/auth';

function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [visible, setVisible] = React.useState(false);
  const [snackBarBackground, setSnacBarBackground] = React.useState('');
  const [messageSnackBar, setMessageSnackBar] = React.useState('');

  const onDismissSnackBar = () => setVisible(false);

  const handleLogin = () => {
    firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(async querySnapshot => {
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          tempData.push(documentSnapshot);
        });
        if (tempData.length === 0) {
          setVisible(true);
          setMessageSnackBar('User not found');
          setSnacBarBackground('#842029');
        } else {
          if (tempData[0]?._data?.password === password) {
            setVisible(true);
            setMessageSnackBar('Login Sucessfully');
            setSnacBarBackground('#75b798');

            await AsyncStorage.setItem(
              'user',
              JSON.stringify(tempData[0]._data),
            );

            setTimeout(() => {
              navigation.navigate('Home');
            }, 2000);
          } else {
            setVisible(true);
            setMessageSnackBar('password incorrect');
            setSnacBarBackground('#842029');
          }
        }
      })
      .catch(error => {
        // console.log(error);
        setVisible(true);
        setMessageSnackBar('Something wrong in our server');
        setSnacBarBackground('#842029');
      });
  };
  return (
    <ScrollView>
      <View
        style={{
          marginTop: 25,
          alignItems: 'center',
        }}>
        <Avatar.Icon
          size={150}
          style={{backgroundColor: '#C4C4C4'}}
          icon={() => <Icon name="user" size={100} />}
        />
      </View>
      <Snackbar
        wrapperStyle={{top: 0}}
        style={{backgroundColor: snackBarBackground, marginBottom: 15}}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'x',
          onPress: () => {
            onDismissSnackBar();
          },
        }}>
        <Text style={{color: 'white'}}>{messageSnackBar}</Text>
      </Snackbar>
      <Text
        style={{
          marginTop: 30,
          color: '#EFC81A',
          fontSize: 32,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Welcome !
      </Text>
      <Text style={{color: '#999999', fontSize: 15, textAlign: 'center'}}>
        Log in to your exiting account.
      </Text>

      <View style={{padding: 20}}>
        <TextInput
          label="Email"
          mode="outlined"
          onChangeText={value => setEmail(value)}
          left={<TextInput.Icon icon={() => <Icon name="user" size={25} />} />}
          style={{marginBottom: 10}}
        />
        <TextInput
          label="Password"
          secureTextEntry
          mode="outlined"
          onChangeText={value => setPassword(value)}
          left={<TextInput.Icon icon={() => <Icon name="lock" size={25} />} />}
          style={{marginBottom: 15}}
        />
        <TouchableWithoutFeedback>
          <View style={{marginBottom: 10, left: 200}}>
            <Text style={{color: '#999999'}}>Forgot Password ?</Text>
          </View>
        </TouchableWithoutFeedback>
        <Button
          mode="contained"
          style={{borderRadius: 10, backgroundColor: '#EFC81A', padding: 3}}
          onPress={handleLogin}>
          Login
        </Button>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 5,
            paddingTop: 10,
          }}>
          <Text>Don’t have an account?</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#EFC81A'}}> Sign Up</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ScrollView>
  );
}

export default Login;
