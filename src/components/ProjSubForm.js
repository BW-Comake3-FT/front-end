import React from 'react';
// import { connect, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

// import { submitProject } from '../actions';



const ProjSubForm = props => {

 const { handleSubmit, register, errors} = useForm();

// const dispatch = useDispatch();

// const onSubmit = () => {
// }

return(
  <div>
    <h1>Submit Form:</h1>
    <div>
      <form onSubmit>
      <label htmlFor="title">
        <input 
        type="text"
        id='title'
        name='title'
        placeholder='Title'
        ref={register({
                 required: 'Required'
             })}
        />
      </label>
      <label htmlFor="description">
        <input 
        type="text"
        id='description'
        name='description'
        placeholder='Description'
        ref={register({
                 required: 'Required'
             })}
        />
      </label>

      <button type='submit'>
        Submit
      </button>
      </form>
    </div>
  </div>
  
)


}

export default ProjSubForm;
