import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Call Component =======================================

import LoadingAnimation from '../../Molecules/Loading/Loading';
import ListRecipes from '../Recipe/listRecipe';

import {SearchMenu} from '../../../Redux/Actions/Recipe/SearchMenu';

const SearchScreen = ({navigation}) => {
  const limit = 8;
  const {data, isLoading, errorMessage} = useSelector(
    state => state.SearchMenu,
  );

  const totalPage = Math.ceil(data / limit);

  //============================================== FOR VIEW =========================================
  return (
    <View style={{backgroundColor: '#fff', paddingBottom: 210}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          backgroundColor: '#efefef',
          borderRadius: 10,
          height: 45,
          paddingHorizontal: 15,
          marginVertical: 10,
          marginHorizontal: 20,
        }}>
        <TextInput
          placeholder="Search recipes in here"
          maxLength={40}
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 14,
            color: '#999',
            width: '100%',
          }}
          value="text"
          onChangeText={text => setSearchQuery(text)}
        />
      </View>
      {/* ========================================================================================================= */}

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          paddingHorizontal: 20,
        }}>
        <Text
          style={{fontFamily: 'Poppins-Medium', color: '#999', marginRight: 5}}>
          Search by :{' '}
        </Text>
      </View>

      {/* ======================================================================================================================= */}

      <ScrollView
        style={{
          backgroundColor: 'white',
          minHeight: '100%',
          paddingHorizontal: 20,
        }}>
        {isLoading === true ? (
          <LoadingAnimation />
        ) : (
          <ListRecipes recipes={data} navigation={navigation} />
        )}

        {totalPage > 1 && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 20,
              marginTop: 10,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#eec302',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  fontSize: 15,
                }}
                onPress={onPrev}>
                Prev
              </Text>
            </TouchableOpacity>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 15}}>
              Show {currentPage} From {totalPage}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#eec302',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  fontSize: 15,
                }}
                onPress={onNext}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {totalPage === 0 && (
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              color: '#999',
              width: '100%',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Recipe Not Found
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
