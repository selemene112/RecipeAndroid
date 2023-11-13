import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function TouchableOpacityProfil({InputTextTO, imageFeature, navigateTo}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container2}>
      <TouchableOpacity style={styles.button} onPress={navigateTo}>
        <Image source={imageFeature} style={styles.imageOpsi} />
        <Text style={styles.buttonText}>{InputTextTO} </Text>
        <Image
          source={require('../../../image/Arrow.jpg')}
          style={styles.imageOpsi}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',

    width: '100%',
    height: '100%',

    backgroundColor: 'white',
  },
  container2: {
    backgroundColor: '#f5f1f0',
    alignItems: 'center',
    height: 40,
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    flex: 1,

    textAlign: 'center',

    color: 'black',
    fontWeight: 'bold',
  },
  imageOpsi: {
    width: '10%',
    height: '90%',
    marginLeft: 15,
  },
});
export default TouchableOpacityProfil;
