import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineUrlWithEndpoint, Path} from '../../../Path/Auth/Auth';
import axios from 'axios';

export const loginUser = data => async dispatch => {
  try {
    dispatch({type: 'USER_LOGIN_PENDING'});

    const response = await axios.post(
      combineUrlWithEndpoint(Path[0].route),
      data,
    );

    const access_token = await response.data.data.token;
    const uniqId = await response.data.data.id;
    console.log(response);
    await AsyncStorage.setItem('token', access_token);
    await AsyncStorage.setItem('id', uniqId.toString());
    dispatch({type: 'USER_LOGIN_SUCCESS', payload: response.data.data});
    return response.data.data;
  } catch (err) {
    console.error('Error during login:', err);
    return dispatch({type: 'USER_LOGIN_FAILED', payload: err.response.data});
  }
};
