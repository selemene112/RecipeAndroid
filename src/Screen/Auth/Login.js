import React from 'react';
import {Text, View, Image} from 'react-native';
import AuthTemplate from '../../Component/Template/Auth/Auth';
import LoginOrganisme from '../../Component/Organisme/Auth/Login';

const LoginScreen = () => {
  return (
    <View style={{flex: 1}}>
      <AuthTemplate>
        <LoginOrganisme />
      </AuthTemplate>
    </View>
  );
};

export default LoginScreen;
