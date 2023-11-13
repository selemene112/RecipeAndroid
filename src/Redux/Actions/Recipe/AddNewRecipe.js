import {instance} from '../../../Utility/API';
import {combineUrlWithEndpoint, Path} from '../../../Path/Auth/Auth';

export const AddNewRecipe = data => async dispatch => {
  try {
    let url = await combineUrlWithEndpoint(Path[5].route);
    dispatch({type: 'AddNewRecipe_PENDING'});
    const response = await instance.post(`${url}`, data);
    dispatch({type: 'AddNewRecipe_SUCCESS', payload: response.data.data});
    return response.data.data;
  } catch (error) {
    console.error('Error during add new recipe:', error);
    return dispatch({
      type: 'AddNewRecipe_FAILED',
      payload: error.response.data,
    });
  }
};
