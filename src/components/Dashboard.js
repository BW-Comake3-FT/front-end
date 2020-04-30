import React from 'react';
import { connect } from 'react-redux';
import '../css/dashboard.css';

import ProjShowcase from './ProjShowcase';


const Dashboard = () => {
  return(
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className='dashboard_container'>
      <div className='display_projects'>
      <ProjShowcase/>
      </div>
      </div>
    </div>
  )
}

export default connect(null, { })(Dashboard);