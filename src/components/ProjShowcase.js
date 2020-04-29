import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import '../css/dashboard.css';

import { fetchProjects } from '../actions';


const ProjShowcase = props => {
  const [nearProj, setNearProj] = useState(false);
  const [myProj, setMyProj] = useState(false);

  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(fetchProjects())
  }, [nearProj])

  console.log(nearProj,'near proj here')
  console.log(myProj, 'my proj here')
  console.log(props.projectReducer.projects, 'IM LOOKING 4 U')
  return(
    <>
    <div className='project_button_container'>

      <button 
      onClick={showNearMe}
      className='project_button'>
      Projects Near Me
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
          <h2>Actual projects</h2>
          {nearProj && (
            <div>
              {props.projectReducer.projects.map(project => { 
                return <h1>{project.title}</h1>})}
            </div>
          )}
          {myProj && (<h2>Show My Projects</h2>)}
        </div>
    </>
  )
}

const mapStateToProps = state =>{
  return state;
}

export default connect( mapStateToProps , { } )(ProjShowcase);