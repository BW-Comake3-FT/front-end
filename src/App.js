import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import ProjSubForm from './components/ProjSubForm';
import ProjEditSubForm from './components/ProjEditSubForm';

function App() {
  return (
    <div className="App">
   <Navigation/>

   <Switch>

     <Route 
      exact path='/' 
      component={Login}
      />

     <Route 
      path='/signup' 
      component={Signup} 
      />

      <Route 
      exact path='/dashboard'
      component={Dashboard}
      />
      {/* <PrivateRoute 
      exact path='/dashboard'
      component={Dashboard}
       />     */}

      {/* <PrivateRoute
      path='/submit-form'
      component={ProjSubForm} 
      /> */}
      
       <Route
      path='/submit-form'
      component={ProjSubForm} 
      />

      <PrivateRoute 
       path='/edit-submission'
       component={ProjEditSubForm}
      />

       <Route 
        component={Login}
       />

   </Switch>
    </div>
  );
}

export default App;
