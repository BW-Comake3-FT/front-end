import {
   FETCH_PROJECTS_SUCCESS,
   SUBMIT_PROJECT_SUCCESS,
   ADD_PROJECT_TO_EDIT,
   UPDATE_PROJECTS
  }  from '../actions';

  const initialState = {
    projects: [],
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
          message: action.payload.message
        }
        case ADD_PROJECT_TO_EDIT: 
        return {
          ...state,
          projectsToEdit: action.payload.id
        }
        case UPDATE_PROJECTS: 
        return {
          ...state,
        }
      default:
        return state;
    }
  }