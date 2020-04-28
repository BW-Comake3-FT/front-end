import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { logout } from '../actions';

const Navigation = props => {
  const history = useHistory();

  const handleLogout = e => {
    console.log('logout', history);
    props.logout(e, history);
    history.push('/')
  }

  return(
    <div>
      <h1>Co-Make</h1>
      <div>
        <Link to='/dashboard'>
        Home
        </Link>

        <Link to='/'>
        Login
        </Link>

        <Link to='/signup'>
          Sign Up!
        </Link>

        <Link 
        to=''
        onClick={(e) => handleLogout(e)}>
          Log out
        </Link>

      </div>
    </div>
  )
}

export default connect(null, { logout })(Navigation);