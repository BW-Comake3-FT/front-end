
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

 import { submitProject } from '../actions';

 import '../css/projsub.css'


const ProjSubForm = props => {

 const { handleSubmit, register, errors} = useForm();

const onSubmit = (newProject) => {
  props.submitProject(newProject,props.history)
  console.log('submit new form', newProject)
}

console.log(props)
return(
  <div className="submit_page">
    <h1>Submit Form:</h1>
    <div>
      <form className="submit_form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">
        <input
        className="title" 
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
        className="description"
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
        className="category"
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
        className="resolution"
        type="text"
        id='solution'
        name='solution'
        placeholder='Solution'
        ref={register({
                 required: 'Required'
             })}
        />
      </label>
      <button className="submit" type='submit'>
        Submit
      </button>
      </form>
    </div>
  </div>
)

}

export default connect(null, { submitProject })(ProjSubForm);