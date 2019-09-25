<<<<<<< HEAD
import React, {Component} from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import React from 'react';
// import logo from './logo.svg';
>>>>>>> 6d2f82ed3a075e0e06c76a97301b73b276b4def0
import './App.css';
import Navigation from "./components/Nav";
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import Login from './components/Login'
import AddItem from './components/AddItem'

function App() {
  return (
    <div className="App">
    <Navigation/>
<<<<<<< HEAD
=======
    
>>>>>>> 6d2f82ed3a075e0e06c76a97301b73b276b4def0
    {/* <Login />
    <SignUp />
      <AddItem />
      <Dashboard /> */}
    </div>
  );
}

export default App;
