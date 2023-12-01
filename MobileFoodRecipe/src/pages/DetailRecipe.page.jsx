/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Linking,
  TextInput,
} from 'react-native';
import {Text, Button, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import firestore from '@react-native-firebase/firestore';

function DetailRecipe({navigation, route}) {
  const [bodyView, setBodyview] = React.useState('ingredients');
  const {image, title, made, ingridients, youtube, slug} = route.params;
  const [commentList, setCommentList] = React.useState([]);

  React.useEffect(() => {
    firestore()
      .collection('comment')
      .where('recipefood', '==' ,slug)
      .get()
      .then(querySnapshot => {
        let tempData = []
        querySnapshot.forEach(documentSnapshot => {
          tempData.push(documentSnapshot)
          // console.log(documentSnapshot)
        });
        // eslint-disable-next-line no-undef
        setCommentList(tempData);
      });
  }, []);
  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            source={{
              uri: image,
            }}
            resizeMode="cover"
            style={{
              height: 275,
              padding: 10,
            }}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Icon name="angle-left" size={25} color="#fff" />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 800,
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 10,
                  }}>
                  Back
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                padding: 20,
                paddingBottom: 50,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: 25,
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: {width: -1, height: 1},
                  textShadowRadius: 10,
                }}>
                {title}
              </Text>
              <Text
                style={{
                  color: '#B0B0B0',
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: {width: -1, height: 1},
                  textShadowRadius: 10,
                }}>
                {made}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: -20,
            mingHeight: 800,
            borderRadius: 10,
            padding: 10,
            paddingTop: 25,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Button
              onPress={() => setBodyview('ingredients')}
              labelStyle={{
                fontSize: 18,
                ...(bodyView === 'ingredients'
                  ? {
                      color: '#18172B',
                      paddingBottom: 4,
                      borderBottomColor: '#EEC302',
                      borderBottomWidth: 2,
                    }
                  : {
                      color: '#666666',
                    }),
              }}>
              Ingredient
            </Button>
            <Button
              textColor="#666666"
              onPress={() => setBodyview('vidio step')}
              labelStyle={{
                fontSize: 18,
                ...(bodyView === 'vidio step'
                  ? {
                      color: '#18172B',
                      paddingBottom: 4,
                      borderBottomColor: '#EEC302',
                      borderBottomWidth: 2,
                    }
                  : {
                      color: '#666666',
                    }),
              }}>
              Vidio-Step
            </Button>
          </View>
          {bodyView === 'ingredients' ? (
            <View
              style={{
                backgroundColor: '#FAF7ED',
                marginTop: 20,
                padding: 15,
                borderRadius: 15,
              }}>
              <Text style={{color: '#18172B'}}>{ingridients}</Text>
            </View>
          ) : null}
          {bodyView === 'vidio step' ? (
            <View style={{marginTop: 10}}>
              <View>
                <ImageBackground
                  source={{
                    uri: image,
                  }}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}
                  style={{
                    height: 175,
                    padding: 10,
                  }}>
                  <TouchableWithoutFeedback
                    onPress={() => Linking.openURL(youtube?.link)}>
                    <View
                      style={{
                        position: 'absolute',
                        alignItems: 'center',
                        paddingTop: 47,
                      }}>
                      <Icon name="play" size={75} color="#fff" />
                    </View>
                  </TouchableWithoutFeedback>
                </ImageBackground>
              </View>

              <View style={{paddingTop: 10}}>
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: 800,
                    fontSize: 15,
                    textAlign: 'center',
                    paddingBottom: 10,
                  }}>
                  {youtube?.title}
                </Text>
                <Text
                  style={{color: '#AAAAAA', fontSize: 10, textAlign: 'center'}}>
                  {youtube?.link}
                </Text>
              </View>
            </View>
          ) : null}

          <View style={{marginTop: 20}}>
            <TextInput
              mode="outlined"
              label="Outlined input"
              multiline={true}
              numberOfLines={4}
              placeholder="Type something"
              style={{backgroundColor: '#FAF7ED'}}
            />
          </View>

          <Button
            mode="contained"
            style={{
              borderRadius: 10,
              backgroundColor: '#EFC81A',
              padding: 3,
              marginTop: 15,
              marginBottom: 15,
            }}
            onPress={() => console.log('Pressed')}>
            Comment
          </Button>
          <Text>Comment : </Text>
          {commentList?.map((item, key) => (
            <View style={{flexDirection: 'row', gap: 20, marginTop: 15}} key={key}>
              <Avatar.Image
                size={50}
                source={{uri: item?._data?.photo}}
                style={{borderRadius: 100}}
              />
              <View>
                <Text style={{fontWeight: 'bold'}}>{item?._data?.name}</Text>
                <Text>{item?._data?.message}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
export default DetailRecipe;