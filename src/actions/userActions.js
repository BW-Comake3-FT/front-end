import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_PROJECTS_START = 'FETCH_PROJECTS_START';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

export const SUBMIT_PROJECT_START = 'SUBMIT_PROJECT_START';
export const SUBMIT_PROJECT_SUCCESS = 'SUBMIT_PROJECT_SUCCESS';
export const SUBMIT_PROJECT_FAILURE = 'SUBMIT_PROJECT_FAILURE';

export const SET_USER_PROJECTS = 'SET_USER_PROJECTS';

export const ADD_PROJECT_TO_EDIT = 'ADD_PROJECT_TO_EDIT';

export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';






export const fetchProjects = () => dispatch => {
  axiosWithAuth()
  .get('/api/projects')
  .then(res => {
    // res.data
    dispatch({ type: FETCH_PROJECTS_START })
    
    dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data})
    console.log('fetchValues promise action', res)
  })
  .catch(err => {
    dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err })
  })
};

export const submitProject = (newProject, history) => dispatch => {
  axiosWithAuth()
  .post('/api/projects', newProject)
  .then(res => {
    console.log(res)
    dispatch({ type: SUBMIT_PROJECT_START })
    dispatch({ type: SUBMIT_PROJECT_SUCCESS, payload: res.data})
    history.push('/dashboard')
  })
  .catch(err => {
    dispatch({ type: SUBMIT_PROJECT_FAILURE, payload:err})
    console.log(err)
  })
};

export const deleteProject = (id) => dispatch => {
  axiosWithAuth()
  .delete(`/api/projects/${id}`)
  .then(res => {
    dispatch({ type: DELETE_PROJECT_SUCCESS })
  })
  .catch(err => {
    dispatch({ type: DELETE_PROJECT_FAILURE})
    console.log(err)
  })
}


//  export const addProjectToEdit = (project, id,)

// export const deleteProject = ()