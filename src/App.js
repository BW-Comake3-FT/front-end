import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';

function App() {
  return (
    <div className="App">
   <h1>App</h1>
   <Switch>
     <Route exact path='/' component={Login}/>
   </Switch>
    </div>
  );
}

export default App;
