import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMenuById} from '../../../Redux/Actions/Recipe/GetDetailMenu';
import {useRoute, useNavigation} from '@react-navigation/native';
function DetailRecipe() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  console.log(id, 'ini id');
  const {data} = useSelector(state => state.getMenuById);

  const getDetail = () => {
    dispatch(getMenuById(id));
  };

  useEffect(() => {
    getDetail();
  }, []);

  const ingredientsArray = data?.ingredients.split(',');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: data?.photo_menu}} style={styles.image} />
        <View style={styles.ViewTitle}>
          <Text style={styles.TextTitle}>{data?.title}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <ScrollView>
          {ingredientsArray.map((ingredient, index) => (
            <Text key={index} style={styles.TextRecipe}>
              {`${index + 1}. ${'  '} ${ingredient.trim()}`}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  textContainer: {
    flex: 1,

    backgroundColor: 'white',
    height: '100%',
  },
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: '50%',
  },
  image: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
  },
  TextTitle: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ViewTitle: {
    position: 'absolute',
    bottom: 0,

    width: '100%',
    height: '15%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  TextRecipe: {
    fontSize: 20,

    left: 40,
  },
});

export default DetailRecipe;
