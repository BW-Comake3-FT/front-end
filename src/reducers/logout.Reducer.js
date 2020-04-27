import {
  LOGOUT_START,
  LOGOUT_SUCCESS,
} from '../actions';

const initialState = {
  token: null,
  user_id: null,
  loggedIn: false
}

export const logoutReducer = (state = initialState, action ) => {
  switch(action.type){
    
    default: 
      return state;
  }
}