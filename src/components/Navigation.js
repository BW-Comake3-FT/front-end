import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import '../css/nav.css';

import { logout } from '../actions';

const Navigation = props => {
  const history = useHistory();

  const handleLogout = e => {
    console.log('logout', history);
    props.logout(e, history);
    history.push('/')
  }

  return(
    <div className='nav_container'>
    
      <h1 className='nav_logo'>
      <Link to='/' 
      className='link'>
      <span className='redCo'>Co</span>-Make</Link>{' '}
      <i className='fas fa-hammer'></i>
      </h1>

      <div className='nav_links'>
        <Link to='/dashboard' className='link'>
        Home
        </Link>

        <Link to='/' className='link'>
        Login
        </Link>

        <Link to='/signup' className='link'>
          Sign Up!
        </Link>

        <Link 
        to=''
        className='link'
        onClick={(e) => handleLogout(e)}>
          Log out
        </Link>

      </div>
    </div>
  )
}

export default connect(null, { logout })(Navigation);