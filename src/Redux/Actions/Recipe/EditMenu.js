import {instance} from '../../../Utility/API';
import {combineUrlWithEndpoint, Path} from '../../../Path/Auth/Auth';

export const editMenu = (data, id, navigate) => async dispatch => {
  try {
    let url = await combineUrlWithEndpoint(Path[5].route);
    dispatch({type: 'EDIT_MENU_PENDING'});
    const response = await instance.put(`${url}/${id}`, data);
    dispatch({type: 'EDIT_MENU_SUCCESS', payload: response.data.data});
  } catch (err) {
    console.error('Error during edit menu user:', err);
    dispatch({type: 'EDIT_MENU_FAILED', payload: err.response.data});
  }
};
