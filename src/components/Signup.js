import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup } from '../actions';

import '../css/signup.css';

const Signup = props => {
    const { 
        register, 
        handleSubmit, 
        errors 
    } = useForm();

    const onSubmit = newUser => {
         props.signup(newUser, props.history);
        console.log('signup onsubmit', newUser)
    }

    return(
         <div className='main signup'>
                <h2 className="title_signup">Sign Up</h2>
                <form className="signup_page" onSubmit={handleSubmit(onSubmit)}>
            <label className="name_label_signup">Name:
                <input 
                className="name_input_signup"
                id='name' 
                name='name'
                type='text'
                placeholder='John Doe'
                ref={register({
                    required: 'Required'
                })}
                />
            </label>
            {errors.name && <p className='validation'>Name is required</p>}
            <br/>
            <label className="email_label_signup">Email:
                <input
                className="email_input_signup"
                id='email'
                name='email'
                type='text'
                placeholder='JohnDoe@email.com'
                ref={register({
                    required: 'Required'
                })}
                />
                </label>
                {errors.email  && <p className='validation'>Email is required</p>}
            <br/>
                <label className="password_label_signup">Password:
                <input
                className="password_input_signup"
                id='password'
                type='password'
                name='password'
                placeholder="Password"
                ref={register({
                    required: 'Required'
                })}
                    />
              {errors.password  && <p className='validation'>Password is required</p>}
                    </label>
            <br/>
                    <label className="zipcode_label_signup">Zipcode:
                    <input
                    className="zipcode_input_signup"
                    id='zipcode'
                    name='zipcode'
                    type='number'
                    placeholder="12345"
                    ref={register({
                    required: 'Required'
                })}
                    />
                    </label>
                    {errors.zipcode  && <p className='validation'>Zipcode is required</p>}
            <br/>
                    <button className="submit_signup" type='submit'>Submit</button>
                    <Link style={{textDecoration:"none"}} to='/'>
                <p className="no_account_signup">Already have an account? Log in!</p>
            </Link>
                    </form>
        </div>
    )
}
export default connect(null, { signup })(Signup);