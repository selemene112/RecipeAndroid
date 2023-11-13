import {instance} from '../../../Utility/API';
import {combineUrlWithEndpoint, Path} from '../../../Path/Auth/Auth';

export const deleteMenu = id => async dispatch => {
  try {
    let url = await combineUrlWithEndpoint(Path[5].route);
    dispatch({type: 'DELETE_MENU_PENDING'});
    const response = await instance.delete(`${url}/${id}`);
    dispatch({type: 'DELETE_MENU_SUCCESS', payload: response.data.data});
  } catch (err) {
    console.error('Error during delete menu user:', err);
    dispatch({type: 'DELETE_MENU_FAILED', payload: err.response.data});
  }
};
