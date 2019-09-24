import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Nav";
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
    {/* <Navigation/> */}
      <SignUp />
      <Login />
      <Dashboard />
    </div>
  );
}

export default App;
