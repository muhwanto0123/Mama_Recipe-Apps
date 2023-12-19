/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';

import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {Searchbar, Text} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

// import food from '../data/recipe.json';
import {getFood} from '../redux/action';

function Home({navigation}) {
  const [keyword, setKeyword] = React.useState('');
  const {food} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFood());
  }, []);

  // console.log(food)
  // console.log(food)
  return (
    <ScrollView style={styles.root}>
      <Searchbar
        placeholder="Search Pasta, Bread, etc"
        // value={keyword}
        style={styles.searchBox}
        onChangeText={text => setKeyword(text)}
      />


      <Text style={styles.heading_1}>Popular for you</Text>

      <View
        style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {food
          ?.filter(item => item.category == 'soup')
          .slice(0, 1)
          .map((item, key) => (
            <View key={key} style={{alignItems: 'center'}}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Category', item)}>
                  <Image source={require('../assets/Soup.png')} />
                </TouchableOpacity>
              </View>
              <Text style={{marginTop: 5}}>Soup</Text>
            </View>
          ))}

        {food
          ?.filter(item => item.category == 'chicken')
          .slice(0, 1)
          .map((item, key) => (
            <View key={key} style={{alignItems: 'center'}}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Category', item)}>
                  <Image source={require('../assets/Chicken.png')} />
                </TouchableOpacity>
              </View>
              <Text style={{marginTop: 5}}>Chicken</Text>
            </View>
          ))}

        {food
          ?.filter(item => item.category == 'seafood')
          .slice(0, 1)
          .map((item, key) => (
            <View key={key} style={{alignItems: 'center'}}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Category', item)}>
                  <Image source={require('../assets/Seafood.png')} />
                </TouchableOpacity>
              </View>
              <Text style={{marginTop: 5}}>Seafood</Text>
            </View>
          ))}

        {food
          ?.filter(item => item.category == 'dessert')
          .slice(0, 1)
          .map((item, key) => (
            <View key={key} style={{alignItems: 'center'}}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Category', item)}>
                  <Image source={require('../assets/Desert.png')} />
                </TouchableOpacity>
              </View>
              <Text style={{marginTop: 5}}>Dessert</Text>
            </View>
          ))}
      </View>
      <Text style={styles.heading_1}>New Recipe</Text>
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row', gap: 20}}>
          {food
            ?.filter(item => item.isNew)
            .map((item, key) => (
              <TouchableWithoutFeedback
                key={key}
                onPress={() => navigation.navigate('Detail', item)}>
                <View style={{marginTop: 15}}>
                  <ImageBackground
                    source={{
                      uri: item.image,
                    }}
                    resizeMode="cover"
                    imageStyle={{borderRadius: 10}}
                    style={{
                      height: 158,
                      width: 260,
                      padding: 10,
                      justifyContent: 'flex-end',
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 800,
                        fontSize: 16,
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10,
                      }}>
                      {item.title}
                    </Text>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            ))}
        </View>
      </ScrollView>
      <Text style={styles.heading_1}>Popular Recipe</Text>
      {food
        ?.filter(item => item.isPopular)
        .map((item, key) => (
          <TouchableWithoutFeedback
            key={key}
            onPress={() => navigation.navigate('Detail', item)}>
            <View
              style={{flexDirection: 'row', gap: 15, marginTop: 15}}
              key={key}>
              <Image
                style={{width: 64, height: 64, borderRadius: 10}}
                source={{
                  uri: item?.image,
                }}
              />
              <View>
                <Text style={{color: '#666666', fontSize: 16, fontWeight: 800}}>
                  {item?.title}
                </Text>
                <Text style={{color: '#B6B6B6', fontSize: 12, fontWeight: 400}}>
                  {item?.ingridients}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Image source={require('../assets/star.png')} />
                  <Text style={{color: '#B6B6B6'}}>{item.rating}</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}

      <View style={{marginBottom: 50}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    // backgroundColor: '#fff',
    padding: 20,
  },
  searchBox: {
    backgroundColor: '#EFEFEF',
  },
  heading_1: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 800,
  },
});

export default Home;
