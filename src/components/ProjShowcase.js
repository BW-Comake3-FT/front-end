import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import '../css/dashboard.css';

import { fetchProjects } from '../actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { addProjectToEdit, editProject } from '../actions';

import moment from 'moment';

const jwt = require('jsonwebtoken')




const ProjShowcase = props => {
  const [nearProj, setNearProj] = useState(false);
  const [myProj, setMyProj] = useState(false);
  const [voted, setVoted] = useState(false);
 
  

  const token = jwt.decode(window.localStorage.getItem('token'))

  const dispatch = useDispatch();
  const history = useHistory();

 const showNearMe = (e) => {
  e.preventDefault();
  setNearProj(prevState => !prevState)
  setMyProj(false)
  }

  const showMyProjects = e => {
    e.preventDefault();
    setMyProj(prevState => !prevState)
    setNearProj(false)
  }


const handleDelete = id => {
  axiosWithAuth()
  .delete(`/api/projects/${id}`)
  .then(res => {
        console.log(res,'handle delete')
        dispatch(fetchProjects())
      })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    dispatch(fetchProjects())
  }, [voted])

  const newArr = props.projectReducer.projects.filter(project => 
    project.userid === token.id )
  
  return(
    <>
    <div className='project_button_container'>

      <button 
      onClick={showNearMe}
      className='project_button'>
      Projects
      </button>

      <button 
      onClick={showMyProjects}     
      className='project_button'>
      My Projects
      </button>

      <button className='submit_button'>
      <Link to='/submit-form' 
      className='link'>Submit Project</Link>
      </button>
     </div>
        <div className='project_showcase'>
          {nearProj && (
            <div className='project_info'>
              {props.projectReducer.projects.map(project => { 
                return (
                <div key={project.id} className='project'>
                <h1>{project.category}</h1>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>{project.location}</p>
                <p>{moment(project.timestamp).format('MMMM Do, YYYY')}</p>
                <p>{project.solution}</p>
                <div className='voteBtns'>
                <i onClick={() =>{
                  setVoted(!voted)
                  dispatch(editProject({upvote: project.upvote+1}, project.id, history))
                  
                }} 
                className='far fa-thumbs-up' style={{fontSize:'24px'}}>{project.upvote}</i>

                <i onClick={() =>{
                  setVoted(!voted)
                  dispatch(editProject({downvote: project.downvote+1}, project.id, history))
                }} 
                className='far fa-thumbs-down' style={{fontSize:'24px'}}>{project.downvote}</i>
                </div>
                </div>
                )})}
            </div>
          )}
          {myProj && (
            <div className='project_info'>
              {newArr.map(project => {
                return(
                  <div key={project.id} className='project'>
                    <h1>{project.category}</h1>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>{project.location}</p>
                    <p>{moment(project.timestamp).format('MMMM Do, YYYY')}</p>
                    <p>{project.solution}</p>
                    <div className='editDeleteBtns'>
                        <button className='editBtn' onClick={() => {
                      dispatch(addProjectToEdit(project.id, history))
                    }}>
                    Edit Project
                     </button>
                    <button className='delBtn' onClick={() => handleDelete(project.id)}>Delete Project</button>
                    </div>
                  
                  </div>
                )
              })}
            </div>
            
            )}
        </div>
    </>
  )
}

const mapStateToProps = state =>{
  return state;
}

export default connect( mapStateToProps , {  addProjectToEdit, editProject  } )(ProjShowcase);