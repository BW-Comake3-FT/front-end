import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import '../css/dashboard.css';

import ProfileInfo from './ProfileInfo';
import ProjShowcase from './ProjShowcase';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Dashboard = props => {
  
console.log(props, 'here are dashboard p')
  return(
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className='dashboard_container'>
      <div className='profile_info'>
        <ProfileInfo/>
      </div>
      <div className='display_projects'>
      <ProjShowcase/>
      </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    state
  };
};
export default connect(mapStateToProps, { })(Dashboard);