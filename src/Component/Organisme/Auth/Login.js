import React, {useState} from 'react';
import TextInputComponent from '../../Atom/TextInput';
import ButtonComponent from '../../Atom/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import {loginUser} from '../../../Redux/Actions/Auth/LoginAction';

function LoginOrganisme() {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const postDataLogin = async () => {
    dispatch(loginUser(inputData))
      .then(response => {
        if (response) {
          navigation.navigate('HomePage');
        }
      })
      .catch(error => {
        console.error('Gagal melakukan login:', error);
      });
  };

  const onChangeLogin = (name, value) => {
    setInputData({...inputData, [name]: value});
  };

  return (
    <View>
      <TextInputComponent
        placeholder="Email"
        onChangeText={value => onChangeLogin('email', value)}
        value={inputData.email}
      />
      <TextInputComponent
        placeholder="Password"
        isPassword={true}
        onChangeText={value => onChangeLogin('password', value)}
        value={inputData.password}
      />
      <ButtonComponent
        title="Login"
        marginBottom={10}
        onPress={() => postDataLogin()}
      />
    </View>
  );
}

export default LoginOrganisme;
