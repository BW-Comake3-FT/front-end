import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { signupReducer } from './signupReducer';
import { logoutReducer } from './logout.Reducer';
import { projectReducer } from './projectReducer';


export default combineReducers({
  loginReducer,
  signupReducer,
  logoutReducer,
  projectReducer
});