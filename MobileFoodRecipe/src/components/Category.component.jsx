import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import listRecipe from '../data/recipe.json';
import { useNavigation } from '@react-navigation/native';

function ListRecipeFood ({category}) {
  const navigation = useNavigation();
  return (
    <>
      <View>
        {listRecipe
          ?.filter(item => item.category ==  'soup')
          .map((item, key) => (
            <View>
              <View style={{flexDirection: 'row', paddingTop: 20}} key={key}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Details', item)}>
                  <View style={{paddingLeft: 15}}>
                    <Image
                      source={{uri: item.image}}
                      style={{height: 64, width: 64, borderRadius: 10}}
                    />
                  </View>
                </TouchableOpacity>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#666666',
                      fontWeight: 500,
                      paddingLeft: 10,
                      paddingBottom: 3,
                      paddingRight: 60,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#B6B6B6',
                      fontWeight: 400,
                      paddingLeft: 10,
                      paddingBottom: 3,
                    }}>
                    {item.category}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{marginLeft: 10, marginTop: 2}}
                      source={require('../assets/star.png')}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#B6B6B6',
                        fontWeight: 400,
                        paddingLeft: 5,
                      }}>
                      {item.rating}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
      </View>
    </>
  );
};

export default ListRecipeFood;
