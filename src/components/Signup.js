import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup } from '../actions';

const Signup = props => {
    const { register, handleSubmit, errors } = useForm();
    // const {
    //     values,
    //     onInputChange,
    //     onSubmit,
    //     disabled,
    //     errors,
    // } = props

    const onSubmit = (newUser, history ) => {
        props.signup(newUser, props.history);
        console.log('signup onsubmit')
    }

    return(
    <form className='signup container'>
        <div className='signup nav'>
        <h3>Co-Make</h3>
        <h3>Login!</h3>
        </div>
         <div className='main signup'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
         <label>Name:
             <input  
             name='name'
             type='text'
             />
         </label>
         <label>Email:
            <input
             name='email'
             type='text'
            />
            </label>
            <label>Password:
              <input
               id='password'
               type='password'
               name='password'
                />
                </label>
                <label>Zipcode
                <input
                name='zipcode'
                type='text'
                />
                </label>
                <button type='submit'>Submit</button>
                </form>
            </div>
<h4>Already have an account? <Link to='/'>Log in!</Link></h4>
        </form>
    )
}

export default connect(null, { signup })(Signup);