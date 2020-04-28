import React from 'react';
import { useForm } from 'react-hook-form';
 import { Link } from 'react-router-dom';
 import { connect } from 'react-redux';
 
 import '../css/login.css';

import { login } from '../actions';


const Login = props => {
  const { 
    register, 
    handleSubmit, 
    // errors 
  } = useForm();

  const onSubmit = credentials => {
    props.login(credentials);
    // console.log('login onsubmit', {credentials})
  }

  console.log({props},'im the props')
 
  
  return (
    <div className='login_form'>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}> 
          <label htmlFor="email">Email</label>
          <input  
          id='email' 
          type="email" 
          name='email'
          placeholder='john@doe.com'
          ref={register({
                 required: 'Required'
             })}
         />
         <label htmlFor="password">Password</label>
         <input 
         id='password'
         type="password"
         name='password'
         placeholder='password'
         ref={register({
                 required: 'Required'
             })}
         />
         <button type='submit'>Login</button>
        </form>
      </div>
      <Link to='/signup'>
      <p>Don't have an account? Sign up!</p>
      </Link>
    </div>
  )
}

export default connect(null, { login })(Login);