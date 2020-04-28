import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup } from '../actions';

const Signup = props => {
    const { 
        register, 
        handleSubmit, 
        // errors 
    } = useForm();
    // const {
    //     values,
    //     onInputChange,
    //     onSubmit,
    //     disabled,
    //     errors,
    // } = props

    const onSubmit = newUser => {
         props.signup(newUser);
        console.log('signup onsubmit', newUser)
    }

    return(
         <div className='main signup'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
         <label>Name:
             <input 
             id='name' 
             name='name'
             type='text'
             ref={register({
                 required: 'Required'
             })}
             />
         </label>
         <label>Email:
            <input
             id='email'
             name='email'
             type='text'
             ref={register({
                 required: 'Required'
             })}
            />
            </label>
            <label>Password:
              <input
               id='password'
               type='password'
               name='password'
               ref={register({
                 required: 'Required'
             })}
                />
                </label>
                <label>Zipcode
                <input
                id='zipcode'
                name='zipcode'
                type='number'
                ref={register({
                 required: 'Required'
             })}
                />
                </label>
                <button type='submit'>Submit</button>
                </form>
        <Link to='/'>
            <p>Already have an account? Log in!</p>
        </Link>
    </div>
    )
}
export default connect(null, { signup })(Signup);