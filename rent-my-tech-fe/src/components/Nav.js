import React from "react";


import Login from './Login.js'
import SignUp from './SignUp.js'
import AddItem from './AddItem.js'
import Dashboard from './Dashboard.js'
import ItemsList from './ItemsList'
import PrivateRoute from './PrivateRoute'
import { Link, Route, Switch } from "react-router-dom";
// import {Nav, Navbar, Form, FormControl, Button} from "react-bootstrap";
import {Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";

// import 'bootstrap/dist/css/bootstrap.min.css';

const Styles = styled.div`
  .navbar{
    background-color: #03b6fc;
    height: 7.5vh;
  }

  .navbar-brand, navbar-nav, .nav-link, .nav-item {
    font-size: 1.6rem;
    font-weight: bold;

    &:hover {
      color: white;
    }
  }
`;


const Navigation = () => (
  <Styles>
    <Navbar expand= "lg">
      <Navbar.Brand href="/">Rent My Tech</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Link to="/login">Log In</Link></Nav.Item>
          <Nav.Item><Link to="/signup">Sign Up</Link></Nav.Item>
          <Nav.Item> <Link to="/additem">Post your Tech</Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <Switch>
         <Route exact path='/' component={ItemsList} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
         <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/additem' component={AddItem} />
    </Switch> 
  </Styles>
);


export default Navigation;   