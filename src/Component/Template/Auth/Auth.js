import React from 'react';
import {Text, View, Image} from 'react-native';

const AuthTemplate = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
      }}>
      <Image
        source={require('../../../image/BgLogin.jpg')}
        style={{position: 'absolute', width: '100%', height: '100%'}}
      />
      <View
        style={{
          backgroundColor: 'white',
          width: 300,
          height: 300,
          borderRadius: 20,
        }}>
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

        {/* ========================================== Text INPUT ====================================== */}

        {children}

        {/* ========================================== END Text INPUT ====================================== */}
      </View>
    </View>
  );
};

export default AuthTemplate;
