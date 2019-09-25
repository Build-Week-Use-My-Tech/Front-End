import React, {Component} from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    {/* <Login />
    <SignUp />
      <AddItem />
      <Dashboard /> */}
    </div>
  );
}

export default App;
