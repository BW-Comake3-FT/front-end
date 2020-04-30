import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import '../css/dashboard.css';

import { fetchProjects } from '../actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { deleteProject } from '../actions'


const ProjShowcase = props => {
  const [nearProj, setNearProj] = useState(false);
  const [myProj, setMyProj] = useState(false);
  const [usersProjects, setUsersProjects] = useState([])


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

  // const toggleSwitch = (e, setState) => {
  //   e.preventDefault();
  //   setState(prevState => !prevState)
  // }

 
const handleDelete = id => {
    dispatch(deleteProject(id))
  }

  useEffect(() => {
    dispatch(fetchProjects())
  }, [nearProj, myProj ])

  
  

  console.log(nearProj,'near proj here')
  console.log(myProj, 'my proj here')
  console.log(props.projectReducer.projects, 'IM LOOKING 4 U')
  return(
    <>
    <div className='project_button_container'>

      <button 
      onClick={showNearMe}
      // (e => toggleSwitch(e, setNearProj))
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
                <p>{project.timestamp}</p>
                <p>{project.solution}</p>
                </div>
                )})}
            </div>
          )}
          {myProj && (
            <div className='project_info'>
            <h1>My Projects</h1>
              {props.projectReducer.usersProjects.map(project => {
                return(
                  <div key={project.id} className='project'>
                    <h1>{project.title}</h1>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>{project.location}</p>
                    <p>{project.timestamp}</p>
                    <p>{project.solution}</p>
                    <button>Edit Project</button>
                    <button onClick={() => handleDelete(project.id)}>Delete Project</button>
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

export default connect( mapStateToProps , {  deleteProject } )(ProjShowcase);