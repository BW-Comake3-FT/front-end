import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Dashboard = props => {
  

  return(
    <div>
      <h1>Dashboard</h1>
      <div>
        <h1>projects</h1>
      </div>
    </div>
  )
}

export default connect(null, { })(Dashboard);