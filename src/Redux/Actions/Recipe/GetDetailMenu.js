import {instance} from '../../../Utility/API';
import {combineUrlWithEndpoint, Path} from '../../../Path/Auth/Auth';

export const getMenuById = id => async dispatch => {
  try {
    let url = combineUrlWithEndpoint(Path[5].route);
    console.log(url, 'urlnya');
    dispatch({type: 'GETMENU_ID_PENDING'});
    const response = await instance.get(`${url}/${id}`);
    dispatch({type: 'GETMENU_ID_SUCCESS', payload: response.data.data});
  } catch (err) {
    console.error('Error during get menu by id:', err);
    dispatch({type: 'GETMENU_ID_FAILED', payload: err.response.data});
  }
};
