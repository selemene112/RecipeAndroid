import React from 'react';
import TextInputComponent from '../../Atom/TextInput';
import ButtonComponent from '../../Atom/ButtonComponent';
import {View} from 'react-native';

function LoginOrganisme() {
  return (
    <View>
      <TextInputComponent placeholder="Username" />
      <TextInputComponent placeholder="Password" isPassword={true} />
      <ButtonComponent
        title="Login"
        marginBottom={10}
        onPress={() => {
          // Tambahkan kondisi login
        }}
      />
    </View>
  );
}

export default LoginOrganisme;
