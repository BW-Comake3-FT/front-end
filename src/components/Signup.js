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
         <div className='main signup'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
         <label>Name:
             <input 
             id='name' 
             name='name'
             type='text'
             />
         </label>
         <label>Email:
            <input
             id='email'
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
                id='zipcode'
                name='zipcode'
                type='text'
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