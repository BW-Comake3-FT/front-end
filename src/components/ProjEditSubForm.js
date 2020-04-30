import React from 'react';
import {useForm} from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { editProject } from '../actions';
import { useHistory } from 'react-router-dom';


const ProjEditSubForm = props => {
    const { handleSubmit, register, errors } = useForm();

    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = (project) => {
      dispatch(editProject(project, props.projectReducer.projectsToEdit, history))
    }

    return(
        <div>
        <h1>Edit Form:</h1>
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
        <button type="submit">
            Submit Edit
        </button>
        </form>
        </div>
        </div>
    )
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { editProject })(ProjEditSubForm);