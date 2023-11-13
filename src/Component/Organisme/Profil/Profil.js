import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import TouchableOpacityProfil from '../../Molecules/TouchableOpacity/TouchableOpacity,';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logout} from '../../../Redux/Actions/Auth/Logout';
import {useSelector} from 'react-redux';
import Navbar from '../../Molecules/Navbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Profil() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {data} = useSelector(state => state.LoginReducer);
  const userLogout = async () => {
    await dispatch(logout(navigation.navigate));
    await AsyncStorage.removeItem('token');
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewProfil}>
        <Image source={{uri: data?.photo}} style={styles.imageProfil} />
        <Text style={styles.textNameProfil}>{data?.username}</Text>
        <View style={styles.editProfil}>
          {/* <Text style={styles.textOnProfil}>My Profil</Text> */}
        </View>
      </View>
      <View style={styles.viewProfil2}>
        <TouchableOpacityProfil
          InputTextTO={'My Menu'}
          imageFeature={require('../../../image/MyRecipe.jpg')}
          navigateTo={() => navigation.navigate('MyRecipe')}
          style={{padding: 10}}
        />

        <TouchableOpacityProfil
          InputTextTO={'Search Menu'}
          imageFeature={require('../../../image/Search.jpg')}
          navigateTo={() => navigation.navigate('Search')}
        />

        <TouchableOpacity style={styles.Logout}>
          <Text style={styles.TextLogout} onPress={userLogout}>
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.NavbarContainer}>
        <Navbar />
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
  viewProfil: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNameProfil: {
    top: 220,
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
  },
  viewProfil2: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageProfil: {
    position: 'absolute',
    width: '30%',
    height: '30%',
    borderRadius: 75,
  },
  editProfil: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '15%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
  },
  textOnProfil: {
    top: 10,
    left: 20,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  NavbarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: 'yellow',
  },
  Logout: {
    width: 120,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  TextLogout: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Profil;
