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

import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {PaperProvider, Searchbar, Text} from 'react-native-paper';

function App() {
  const [keyword, setKeyword] = React.useState('');
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView style={styles.root}>
          <Searchbar
            placeholder="Search Pasta, Bread, etc"
            value={keyword}
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
            {[
              {
                icons: <Image source={require('./assets/Soup.png')} />,
                label: 'Soup',
              },
              {
                icons: <Image source={require('./assets/Chicken.png')} />,
                label: 'Chicken',
              },
              {
                icons: <Image source={require('./assets/Seafood.png')} />,
                label: 'Seafood',
              },
              {
                icons: <Image source={require('./assets/Desert.png')} />,
                label: 'Desert',
              },
            ].map((item, key) => (
              <View key={key}>
                {item.icons}
                <Text
                  style={{textAlign: 'center', fontWeight: 800, marginTop: 5}}>
                  {item.label}
                </Text>
              </View>
            ))}
          </View>
          <Text style={styles.heading_1}>New Recipe</Text>
          <ScrollView horizontal={true}>
            <View style={{flexDirection: 'row', gap: 20}}>
              {[...new Array(4)].map((item, key) => (
                <View style={{marginTop: 15}} key={key}>
                  <ImageBackground
                    source={{
                      uri: 'https://assets.unileversolutions.com/v1/104829922.jpg?im=AspectCrop=(1280,499);Resize=(1280,499)',
                    }}
                    resizeMode="cover"
                    imageStyle={{borderRadius: 10}}
                    style={{
                      height: 160,
                      width: 130,
                      padding: 10,
                      justifyContent: 'flex-end',
                    }}>
                    <Text
                      style={{color: '#fff', fontSize: 14, fontWeight: 500}}>
                      Inside
                    </Text>
                  </ImageBackground>
                </View>
              ))}
            </View>
          </ScrollView>
          <Text style={styles.heading_1}>Popular Recipe</Text>
          {[...new Array(10)].map((item, key) => (
            <View
              style={{flexDirection: 'row', gap: 15, marginTop: 15}}
              key={key}>
              <Image
                style={{width: 64, height: 64, borderRadius: 10}}
                source={{
                  uri: 'https://assets.unileversolutions.com/recipes-v3/242463-default.jpg?im=AspectCrop=(1280,500);Resize=(1280,500)',
                }}
              />
              <View>
                <Text style={{color: '#666666', fontSize: 16, fontWeight: 800}}>
                  Semur Telur
                </Text>
                <Text style={{color: '#B6B6B6', fontSize: 12, fontWeight: 400}}>
                  Spicy, Sweet
                </Text>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                  <Image source={require('./assets/star.png')} />
                  <Text style={{color: '#B6B6B6'}}>4.7</Text>
                </View>
              </View>
            </View>
          ))}
          <View style={{marginBottom: 50}} />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
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

export default App;
