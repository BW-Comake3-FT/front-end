import {
   FETCH_PROJECTS_START, 
   FETCH_PROJECTS_SUCCESS,
   SUBMIT_PROJECT_START,
   SUBMIT_PROJECT_SUCCESS,
   SUBMIT_PROJECT_FAILURE,
   DELETE_PROJECT_SUCCESS,
   DELETE_PROJECT_FAILURE
    
  }  from '../actions';

  const initialState = {
    projects: [],
    usersProjects: [],
    projectsToEdit: {},
    message:'',
    error:''
  };

  export const projectReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_PROJECTS_SUCCESS:
      return{
        ...state,
        projects: action.payload
      }
      case SUBMIT_PROJECT_SUCCESS:
        return{
          ...state,
          usersProjects: [...state.usersProjects, action.payload.project],
          message: action.payload.message
        }
      default:
        return state;
    }
  }