import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions';

const initialState = {
  loggingIn: false,
  loggedIn: false,
  error:'',
  message:''
}

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error:'',
        message:''
      };
      case LOGIN_SUCCESS: 
      return {
        ...state, 
        loggingIn: false,
        loggedIn: true,
        error:'',
        message: action.payload
      };
      case LOGIN_FAILURE: 
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        error: action.payload,
        message:''
      };
      default: 
        return state;
  } 
}