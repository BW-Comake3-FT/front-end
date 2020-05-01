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
    errors 
  } = useForm();

 

  const onSubmit = credentials => {
    props.login(credentials, props.history);
  }

  console.log({props},'im the props')
 
  
  return (
    <div className='login_form'>
      <h1 className="title_login">Login</h1>
     <div className='loginError'>{props.loginReducer.error}</div> 
      <div>
        <form className="sign_in_login" onSubmit={handleSubmit(onSubmit)}> 
          <label className="email_label_login" htmlFor="email">Email</label>
          <input
          className="email_input_login"  
          id='email' 
          type="email" 
          name='email'
          placeholder='john@doe.com'
          ref={register({
                 required: 'Required'
             })}
         />
        {errors.email  && <p className='validation'>Email is required</p>}
         <br/>
         <label className="password_label_login" htmlFor="password">Password</label>
         <input 
         className="password_input_login"
         id='password'
         type="password"
         name='password'
         placeholder='password'
         ref={register({
                 required: 'Required'
             })}
         />
         {errors.password  && <p className='validation'>Password is required</p>}
         <br/>
         <button className="submit_login" type='submit'>Login</button>
          <Link style={{textDecoration:"none"}} to='/signup'>
            <p className="no_account_login">Don't have an account? Sign up!</p>
          </Link>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return state;
}
export default connect(mapStateToProps, { login })(Login);