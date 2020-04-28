import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/dashboard.css';


const ProjShowcase = () => {
  const [nearProj, setNearProj] = useState(false);
  const [myProj, setMyProj] = useState(false);

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

  console.log(nearProj,'near proj here')
  console.log(myProj, 'my proj here')
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
          {nearProj && (<h2>Show Projects Near Me</h2>)}
          {myProj && (<h2>Show My Projects</h2>)}
        </div>
    </>
  )
}

export default ProjShowcase;