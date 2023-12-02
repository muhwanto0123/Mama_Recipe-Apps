/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, View, TouchableWithoutFeedback} from 'react-native';
import {Text, TextInput, Button, Snackbar} from 'react-native-paper';
import IconA from 'react-native-vector-icons/dist/MaterialIcons';
import IconB from 'react-native-vector-icons/dist/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function Register({navigation}) {
  // eslint-disable-next-line react/jsx-no-undef
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const [snackBarBackground, setSnacBarBackground] = React.useState('');
  const [messageSnackBar, setMessageSnackBar] = React.useState('');

  const onDismissSnackBar = () => setVisible(false);

  const handleRegister = () => {
    // eslint-disable-next-line no-const-assign
    if (password === confirmPassword) {
      firestore()
        .collection('users')
        .add({
          email,
          fullname,
          password,
          phone,
          created_at: new Date().getTime(),
        })
        .then(() => {
          setVisible(true);
          setMessageSnackBar('Register Successfully');
          setSnacBarBackground('#75b798');
          setTimeout(() => {
            navigation.navigate('Login')
          }, 2000)
        })
        .catch(() => {
          setVisible(true);
          setMessageSnackBar('Something wrong in our server');
          setSnacBarBackground('#842029');
        });
    } else {
      setVisible(true);
      setMessageSnackBar('Password confirm not match');
      setSnacBarBackground('#842029');
    }
  };
  // const handleRegister = () => {
  //   auth()
  //     .signInWithEmailAndPassword("muhtiwanto@gmail.com", "password")
  //     .then((response) => {
  //       console.log("success ", response)
  //       // User has not enrolled a second factor
  //     })
  //     .catch(error => {
  //       console.log("error ", error)
  //       const {code} = error;
  //       // Make sure to check if multi factor authentication is required
  //       if (code === 'auth/multi-factor-auth-required') {
  //         return;
  //       }

  //       // Other error
  //     });
  // };
  return (
    <ScrollView>
      <Snackbar
        wrapperStyle={{top: 0}}
        style={{backgroundColor: snackBarBackground}}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'x',
          onPress: () => {
            onDismissSnackBar()
          },
        }}>
        <Text style={{color: 'white'}}>{messageSnackBar}</Text>
      </Snackbar>

      <Text
        style={{
          marginTop: 50,
          color: '#EFC81A',
          fontSize: 32,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Let’s Get Started !
      </Text>
      <Text style={{color: '#999999', fontSize: 15, textAlign: 'center'}}>
        Create new account to access all feautures
      </Text>

      <View style={{padding: 20}}>
        <TextInput
          label="Fullname"
          mode="outlined"
          onChangeText={value => setFullname(value)}
          left={<TextInput.Icon icon={() => <IconB name="user" size={25} />} />}
          style={{marginBottom: 10}}
        />
        <TextInput
          label="Email"
          mode="outlined"
          onChangeText={value => setEmail(value)}
          left={
            <TextInput.Icon icon={() => <IconA name="email" size={25} />} />
          }
          style={{marginBottom: 10}}
        />
        <TextInput
          label="Phone"
          mode="outlined"
          onChangeText={value => setPhone(value)}
          left={
            <TextInput.Icon icon={() => <IconB name="phone" size={25} />} />
          }
          style={{marginBottom: 10}}
        />
        <TextInput
          label="Password"
          secureTextEntry
          mode="outlined"
          onChangeText={value => setPassword(value)}
          left={<TextInput.Icon icon={() => <IconB name="lock" size={25} />} />}
          style={{marginBottom: 10}}
        />
        <TextInput
          label="Comfirm Password"
          secureTextEntry
          mode="outlined"
          onChangeText={value => setConfirmPassword(value)}
          left={
            <TextInput.Icon
              icon={() => <IconB name="unlock-alt" size={25} />}
            />
          }
          style={{marginBottom: 15}}
        />

        <Button
          mode="contained"
          style={{borderRadius: 10, backgroundColor: '#EFC81A', padding: 3}}
          onPress={handleRegister}>
          CREATE
        </Button>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 5,
            paddingTop: 10,
          }}>
          <Text>Already have account?</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#EFC81A'}}>Log in Here</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ScrollView>
  );
}

export default Register;
