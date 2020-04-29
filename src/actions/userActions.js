import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_PROJECTS_START = 'FETCH_PROJECTS_START';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';





export const fetchProjects = () => dispatch => {
  axiosWithAuth()
  .get('/api/projects')
  .then(res => {
    // res.data
    dispatch({ type: FETCH_PROJECTS_START })
    
    dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data})
    console.log('fetchValues promise action', res)
  })
  .catch(err => console.log('error',err))
}