/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, View, TouchableWithoutFeedback} from 'react-native';
import {Text, TextInput, Button, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import auth from '@react-native-firebase/auth';

function Login({navigation}) {
  // eslint-disable-next-line react/jsx-no-undef
//   const handleLogin = () => {
//     auth()
//       .signInWithEmailAndPassword("muhtiwanto@example.com", "password")
//       .then((response) => {
//         console.log("success ", response)
//         // User has not enrolled a second factor
//       })
//       .catch(error => {
//         console.log("error ", error)
//         const {code} = error;
//         // Make sure to check if multi factor authentication is required
//         if (code === 'auth/multi-factor-auth-required') {
//           return;
//         }

//         // Other error
//       });
//   };
  return (
    <ScrollView>
      <View
        style={{
          marginTop: 25,
          alignItems: 'center',
        }}>
        <Avatar.Icon size={150} style={{backgroundColor: '#C4C4C4'}} icon={() => <Icon name="user" size={100} />} />
      </View>
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
          label="Fullname"
          secureTextEntry
          mode="outlined"
          left={<TextInput.Icon icon={() => <Icon name="user" size={25} />} />}
          style={{marginBottom: 10}}
        />
        <TextInput
          label="Password"
          secureTextEntry
          mode="outlined"
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
          onPress={() => console.log('Pressed')}>
          CREATE
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
