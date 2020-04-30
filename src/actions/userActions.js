import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_PROJECTS_START = 'FETCH_PROJECTS_START';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

export const SUBMIT_PROJECT_START = 'SUBMIT_PROJECT_START';
export const SUBMIT_PROJECT_SUCCESS = 'SUBMIT_PROJECT_SUCCESS';
export const SUBMIT_PROJECT_FAILURE = 'SUBMIT_PROJECT_FAILURE';

export const SET_USER_PROJECTS = 'SET_USER_PROJECTS';

export const UPDATE_PROJECTS = 'UPDATE_PROJECTS';
export const ADD_PROJECT_TO_EDIT = 'ADD_PROJECT_TO_EDIT';




export const fetchProjects = () => dispatch => {
  axiosWithAuth()
  .get('/api/projects')
  .then(res => {
    dispatch({ type: FETCH_PROJECTS_START })
    dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data})
  })
  .catch(err => {
    dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err })
  })
};



export const submitProject = (newProject, history) => dispatch => {
  axiosWithAuth()
  .post('/api/projects', newProject)
  .then(res => {
    dispatch({ type: SUBMIT_PROJECT_START })
    dispatch({ type: SUBMIT_PROJECT_SUCCESS, payload: res.data})
    history.push('/dashboard')
  })
  .catch(err => {
    dispatch({ type: SUBMIT_PROJECT_FAILURE, payload:err})
    console.log(err)
  })
};




export const addProjectToEdit = (project, history) => dispatch => {
  console.log(project, 'I AM THE PROJECT BEING EDITED')
  dispatch({ type: ADD_PROJECT_TO_EDIT, payload: project });
  history.push('/edit-submission');
}





export const editProject = (project, id, history) => dispatch =>{
axiosWithAuth()
.put(`/api/projects/${id}`, project)
.then(res => {
  dispatch({ type: UPDATE_PROJECTS })
  history.push('/dashboard');
})
.catch(err => console.log('edit project failed', err))
}
