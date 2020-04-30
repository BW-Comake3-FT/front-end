import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

 import { submitProject } from '../actions';



const ProjSubForm = props => {

 const { handleSubmit, register, errors} = useForm();

// const dispatch = useDispatch();

const onSubmit = (newProject) => {
  props.submitProject(newProject,props.history)
  console.log('submit new form', newProject)
}

console.log(props)
return(
  <div>
    <h1>Submit Form:</h1>
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      <label htmlFor="category">
        <input 
        type="text"
        id='category'
        name='category'
        placeholder='Category'
        ref={register({
                 required: 'Required'
             })}
        />
      </label>
      <label htmlFor="solution">
        <input 
        type="text"
        id='solution'
        name='solution'
        placeholder='Solution'
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

export default connect(null, { submitProject })(ProjSubForm);
