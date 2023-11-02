import {instance} from '../../../Utility/API';
import {combineUrlWithEndpoint, Path} from '../../../Path/Auth/Auth';

export const SearchMenu =
  (searchby, search, sortby, sort, page, limit) => async dispatch => {
    console.log('data dari sini');
    try {
      let url = 'https://rcp.codeinsomnia.com';
      dispatch({type: 'GETMENU_ALL_PENDING'});
      const response = await instance.get(
        `${url}/sort-menu?searchby=${searchby}&search=${search}&sortby=${sortby}&sort=${sort}&page=${page}&limit=${limit}`,
      );
      dispatch({type: 'GETMENU_ALL_SUCCESS', payload: response.data.data});
    } catch (err) {
      console.error('Error during get menu all:', err);
      dispatch({type: 'GETMENU_ALL_FAILED', payload: err.response.data});
    }
  };
