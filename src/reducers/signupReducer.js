import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions';

const initialState = {
  loggingIn: false,
};

export const signupReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGNUP_START: 
    return{
      ...state,
      loggingIn: true
    }
    case SIGNUP_SUCCESS:
      return{
        ...state,
        loggingIn: false,
      }
      case SIGNUP_FAILURE:
        return {
          ...state,
          loggingIn: false
        }
    default:
      return state;
  }
}