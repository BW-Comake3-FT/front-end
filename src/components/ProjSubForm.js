import React from 'react';
// import { connect, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

// import { submitProject } from '../actions';
import '../css/projsub.css'


const ProjSubForm = props => {

 const { handleSubmit, register, errors} = useForm();

// const dispatch = useDispatch();

// const onSubmit = () => {
// }

return(
  <div className="submit_page">
    <h1>Submit Form:</h1>
    <div>
      <form className="submit_form"onSubmit>
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
      <br/>
      <label htmlFor="description">
        <textarea
        className="description" 
        type="text"
        id='description'
        name='description'
        placeholder='Description'
        rows='5'
        ref={register({
                 required: 'Required'
             })}
        />
      </label>
      <br/>
      <label htmlFor="category">
        <select
        className="category"
        id='cactegory'
        name='category'
        placeholder='How would you classify this issue?'
        ref={register({
                 required: 'Required'
             })}
        >
        <option defaultValue='how would you classify this issue?'>How would you classify this issue?</option>
        <option value='school'>School</option>
        <option value='church'>Church</option>
        <option value='home owners association'>Home Owners Association</option>
        <option value='State'>State</option>
        </select>
      </label>
      <br/>
      <label htmlFor="resolution">
        <select
        className="resolution"
        id='resolution'
        name='resolution'
        placeholder='How can we solve this issue?'
        ref={register({
                 required: 'Required'
             })}
        >
        <option defaultValue='How can we solve this issue?'>How can we solve this issue?</option>
        <option value='protest'>Protest</option>
        <option value='petition'>Petition</option>
        <option value='writing/calling our local government'>Writing/Calling our local government</option>
        <option value='fundraiser'>Fundraiser</option>
        </select>
      </label>
      <br/>
      <button className="submit" type='submit'>
        Submit
      </button>
      </form>
    </div>
  </div>
  
)


}

export default ProjSubForm;
