import React from 'react';
import {Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
      }}>
      <Image
        source={require('./src/image/BgLogin.jpg')}
        style={{position: 'absolute', width: '100%', height: '100%'}}
      />
      <View
        style={{
          backgroundColor: 'white',
          width: 300,
          height: 300,
          borderRadius: 20,
        }}>
        <Image
          source={require('./src/image/Login.png')}
          style={{
            width: 100,
            alignItems: 'center',
            height: 100,
            borderRadius: 100,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            marginTop: 5,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          <Text style={{color: 'yellow'}}>WEL</Text>

          <Text style={{color: 'Black'}}>COME</Text>
        </Text>
        <Text
          style={{
            fontSize: 20,

            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Mama Recipe
        </Text>
      </View>
    </View>
  );
};

export default App;
