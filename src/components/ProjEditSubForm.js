import React from 'react';
import {useForm} from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { editProject } from '../actions';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../css/editprojsub.css';


const ProjEditSubForm = props => {
    const { handleSubmit, register, errors } = useForm();

    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = (project) => {
      console.log(project,' IM BEING EDITED')
      console.log(props,'HELOOOOOO')
      dispatch(editProject(project, props.projectReducer.projectsToEdit, history))
    }

    return(
        <div>
        <h1 className='editTitle'>Edit Form:</h1>
        <div>
         <form className='editForm' onSubmit={handleSubmit(onSubmit)}>
         <label htmlFor="title">
        <input 
        // variant="filled" 
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
        // variant="filled" 
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
        // variant="filled"
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
        //  variant="filled"
        type="text"
        id='solution'
        name='solution'
        placeholder='Solution'
        ref={register({
                 required: 'Required'
             })}
        />
      </label>
        <Button variant='contained' color='secondary' type="submit">
            Submit Edit
        </Button>
        </form>
        </div>
        </div>
    )
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { editProject })(ProjEditSubForm);