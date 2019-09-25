import React from "react";

import Login from './Login.js'
import SignUp from './SignUp.js'
import AddItem from './AddItem.js'
import Dashboard from './Dashboard.js'
import ItemsList from './ItemsList'
import PrivateRoute from './PrivateRoute'
import { Link, Route, Switch } from "react-router-dom";
import {Nav, Navbar, Link, Form, FormControl, Button} from "react-bootstrap";
import styled from "styled-components";

// import 'bootstrap/dist/css/bootstrap.min.css';

const NavStyle = styled.div`
    display: flex;
    justify-content: space-between;
`

const LinkStyle = styled.div`
    font-size: 1.6rem;
    margin: 0 10px;
`
//needs more styling **backbround, text, hover, pointer, etc

const Navigation = () => {
    return(
        <Navbar>
            <NavStyle>
              {/* could use a logo */}
              <LinkStyle>
                <Link to='/'><img src=' {/* enter logo here */}' /> </Link>
              </LinkStyle>
              <Form inline>
                  {/* might not even need this bar */}
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
              </Form>
              <LinkStyle>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/additem">Post your Tech</Link>
              </LinkStyle>
            </NavStyle>
                <Switch>
                <Route exact path='/' component={ItemsList} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <PrivateRoute path='/additem' component={AddItem} />
                </Switch> 
        </Navbar>
        
    );
};

export default Navigation;