import {
   FETCH_PROJECTS_START, 
   FETCH_PROJECTS_SUCCESS 
  }  from '../actions';

  const initialState = {
    projects: [],
    projectsToEdit: {},
    error:''
  };

  export const projectReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_PROJECTS_SUCCESS:
      return{
        ...state,
        projects: action.payload
      }
      default:
        return state;
    }
  }