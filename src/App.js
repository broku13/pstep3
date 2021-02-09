import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './navbar';
import Login from './login';
import Welcome from './welcome';
import CreateAccount from './createaccount';
import {Link, NavLink, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Welcome/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/createaccount'>
        <CreateAccount/>
      </Route>
      <Route path='/home'>
        <NavBar/>
      </Route>
    </Switch>
  );
}

export default App;
