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
    case LOGOUT_START:
      return{
        ...state,
        token: null,
        user_id:null
      } 
      case LOGOUT_SUCCESS:
        return {
          ...state,
          loggedIn: false
        }
    default: 
      return state;
  }
}