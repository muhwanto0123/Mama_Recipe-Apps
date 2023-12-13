import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [dataUser, setDataUser] = React.useState([]);

  React.useEffect(() => {
    profileUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const profileUser = async () => {
    firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          tempData.push(documentSnapshot);
          // console.log(documentSnapshot)
        });
        setDataUser(tempData[0]);
      });
  };

  return (
    <View style={styles.container}>
      {/* {dataUser
        ?.sort((next, prev) => prev?._data.created_at - next?._data.created_at)
        ?.map((item, key) => ( */}
          <View style={styles.avatarContainer}>
            <Image
              source={{uri: 'https://i.pravatar.cc/250'}}
              style={styles.avatar}
            />
            <Text style={styles.name}> {dataUser?._data?.fullname} </Text>
          </View>
        {/* ))} */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>{dataUser?._data?.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.infoValue}>{dataUser?._data?.phone}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Bio:</Text>
        <Text style={styles.infoValue}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
          sem. Etiam finibus odio quis feugiat facilisis.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginTop: 5,
  },
});

export default Profile;
