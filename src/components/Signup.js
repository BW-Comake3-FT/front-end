import React from 'react'

function Signup(props) {
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props


    return(
        <form className='signup container'>
            <div className='signup nav'>
                <h3>Co-Make</h3>
                <h3>Login!</h3>
            </div>
            
            <div className='main signup'>
                <h2>Sign Up</h2>
                <div className='errors'>
                    {errors.name}
                    {errors.email}
                    {errors.zipcode}
                </div>

                <label>Name:
                    <input  
                        value={values.name}
                        onChacnge={onInputChange}
                        name='name'
                        type='text'
                    /></label>
                
                <label>Email:
                    <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='text'
                    />
                </label>

                <label>Password:
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'
                    />
                </label>

                <label>Zipcode
                    <input
                        value={values.zipcode}
                        onChange={onInputChange}
                        name='zipcode'
                        type='text'
                    />
                </label>

                <button onClick={onSubmit} disabled={disabled}>Submit</button>
            </div>

            <h4>Already have an account? <Link>Log in!</Link></h4>
        </form>
    )
}