import axios from 'axios';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


export const login = (credentials, history) => dispatch => {
  console.log(credentials,'login action firing');
  dispatch({ type: LOGIN_START});

  return(
   axios.post('https://cors-anywhere.herokuapp.com/https://co-make-app.herokuapp.com/api/auth/login', credentials)
   .then(res => {
     console.log(res,' response from login ')
     localStorage.setItem('token', res.data.token)
     dispatch({ type: LOGIN_SUCCESS, payload: res.data.message });
     history.push('/dashboard');
   })
   .catch(err => {
     dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message})
   })
  );
};

export const signup = (newUser, history) => dispatch => {
  console.log('signup action firing');
  dispatch({ type: SIGNUP_START });
  return(
    axios.post('https://cors-anywhere.herokuapp.com/https://co-make-app.herokuapp.com/api/auth/register', newUser)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS })
      history.push('/')
    })
    .catch(err => {
      console.log('Signup action error', err);
      dispatch({ type: SIGNUP_FAILURE, payload: err });
    })
    
  );
};

export const logout = e => dispatch => {
  dispatch({ type: LOGOUT_START });
  e.preventDefault();
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  dispatch({ type: LOGOUT_SUCCESS })
}