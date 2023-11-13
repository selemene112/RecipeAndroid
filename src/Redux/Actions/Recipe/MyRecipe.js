import {instance} from '../../../Utility/API';
import {combineUrlWithEndpoint, Path} from '../../../Path/Auth/Auth';

export const MyRecipe = (sortby, sort, page, limit) => async dispatch => {
  try {
    console.log('data dari sini');
    let url = await combineUrlWithEndpoint(Path[6].route);
    console.log(url, 'urlnya');
    dispatch({type: 'MyRecipe_USER_PENDING'});
    const response = await instance.get(
      `${url}?sortby=${sortby}&sort=${sort}&page=${page}&limit=${limit}`,
    );
    dispatch({type: 'MyRecipe_USER_SUCCESS', payload: response.data.data});
  } catch (err) {
    console.error('Error during get menu user:', err);
    dispatch({type: 'MyRecipe_USER_FAILED', payload: err.response.data});
  }
};
