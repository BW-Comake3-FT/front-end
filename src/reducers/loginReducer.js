import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions';

const initialState = {
  loggingIn: false,
  loggedIn: false,
  error:'',
}

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
      };
      case LOGIN_SUCCESS: 
      return {
        ...state, 
        loggingIn: false,
        loggedIn: true,
      };
      case LOGIN_FAILURE: 
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
      };
      default: 
        return state;
  } 
}