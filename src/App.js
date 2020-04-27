import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
   <h1>App</h1>
   <Switch>
     <Route 
     exact path='/' 
     component={Login}/>
     <Route 
     path='/signup' 
     component={Signup} />
   </Switch>
    </div>
  );
}

export default App;
