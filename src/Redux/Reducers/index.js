import {combineReducers} from 'redux';
import LoginReducer from './Login';
import GetAllMenu from './GetAllMenu';
import SearchMenu from './SearchMenu';
import getMenuById from './GetDetailMenu';
import AddNewRecipe from './AddNewRecipe';
import MyRecipe from './MyRecipe';
import editMenu from './EditMenu';
import deleteMenu from './DeleteMyMenu';

const rootReducers = combineReducers({
  LoginReducer,
  GetAllMenu,
  SearchMenu,
  getMenuById,
  AddNewRecipe,
  MyRecipe,
  editMenu,
  deleteMenu,
});

export default rootReducers;
