// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import {combineUrlWithEndpoint, Path} from '../../../Path/Auth/Auth';

// export const GetAllMenu = () => async dispatch => {
//   try {
//     dispatch({type: 'GetAllMenu_PENDING'});
//     const response = await axios.get(combineUrlWithEndpoint(Path[1].route));
//     dispatch({type: 'GetAllMenu_SUCCESS', payload: response.data.data});
//     return response.data.data;
//   } catch (err) {
//     return dispatch({type: 'GetAllMenu_FAILED', payload: err.response.data});
//   }
// };
