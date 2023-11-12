/* This Code is created by Muhammad Ariyanda ZUlyadiansyah
 * https://github.com/selemene112
 * This code have fitur for show all recipe yourself
 *
 * Problem This code
 * this code problem if we push delete my aplication is not refresh the page
 *
 * */

import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {MyRecipe} from '../../../Redux/Actions/Recipe/MyRecipe';
import {deleteMenu} from '../../../Redux/Actions/Recipe/DeleteRecipe';

const CardRecipe = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  // const [dataVersion, setDataVersion] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  // ============================================== Get API ================================
  const {data, isLoading, errorMessage} = useSelector(state => state.MyRecipe);

  //=============================================== End Get API ================================

  const getMenuByUser = async () => {
    setIsLoadingData(true);
    const response = await dispatch(MyRecipe('created_at', 'DESC', page, 4));
    if (response) {
      setRecipes(response.rows);
    }
    setIsLoadingData(false);
  };

  const handleDelete = async itemId => {
    try {
      dispatch(deleteMenu(itemId));

      const updatedRecipes = recipes.filter(recipe => recipe.id !== itemId);
      setRecipes(updatedRecipes);

      dispatch(getMenuByUser());
    } catch (error) {
      console.error('error saat delete', error);
    }
  };
  useEffect(() => {
    getMenuByUser();
  }, [page]);
  return (
    <ScrollView>
      {isLoading === true ? (
        <ActivityIndicator size="large" />
      ) : data?.rows && data.rows?.length > 0 ? (
        data.rows.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.push('DetailRecipe', {id: item.id})}>
            <View style={styles.container}>
              <View style={styles.leftContainer}>
                <Image
                  source={{uri: item.photo_menu}}
                  style={styles.imageRecipe}
                />
              </View>
              <View style={styles.MiddleContainer}>
                <View style={styles.ViewTitle}>
                  <Text>{item.title}</Text>
                  <Text>{item.category}</Text>
                </View>
              </View>
              <View style={styles.rightContainer}>
                <TouchableOpacity
                  style={styles.ButtonEdit}
                  onPress={() =>
                    navigation.push('EditMyRecipe', {id: item.id})
                  }>
                  <Text style={styles.TextButton}>EDIT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.ButtonDelete}
                  onPress={async () => {
                    await handleDelete(item.id);
                  }}>
                  <Text style={styles.TextButton}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No Data</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#e4f7e4',
    borderRadius: 15,
  },
  leftContainer: {
    flex: 1,
  },
  MiddleContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageRecipe: {
    flex: 1,
    marginLeft: 10,
    height: '80%',
    width: '80%',
    borderRadius: 15,
  },
  ViewTitle: {
    marginTop: 5,
    borderRadius: 15,
    fontWeight: 'bold',
  },
  ButtonEdit: {
    marginTop: 5,
    borderRadius: 15,
    backgroundColor: '#30C0F3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 80,
  },
  TextButton: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ButtonDelete: {
    marginTop: 5,
    borderRadius: 15,
    backgroundColor: '#F57E71',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 80,
  },
});

export default CardRecipe;
