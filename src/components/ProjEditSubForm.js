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
      console.log(props)
      dispatch(editProject(project, props.projectReducer.projectsToEdit, history))
    }

    return(
        <div>
        <h1 className='editTitle'>Edit Form:</h1>
        <div>
         <form className='editForm' onSubmit={handleSubmit(onSubmit)}>
         <label htmlFor="title">Title
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
      {errors.title && <p className='validation'>Title is required</p>}
      <label htmlFor="description">Description
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
      {errors.description && <p className='validation'>Description is required</p>}
      <label htmlFor="category">Category
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
      {errors.category && <p className='validation'>Category is required</p>}

      <label htmlFor="solution">Solution
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
      {errors.solution && <p className='validation'> is required</p>}
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