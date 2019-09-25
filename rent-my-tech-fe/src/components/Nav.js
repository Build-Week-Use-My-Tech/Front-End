import React from "react";
import Login from './Login.js'
import SignUp from './SignUp.js'
import AddItem from './AddItem.js'
import Dashboard from './Dashboard.js'
import ItemsList from './ItemsList'
import PrivateRoute from './PrivateRoute'
import { Link, Route, Switch } from "react-router-dom";

const Navigation = () => {
    return(
        <div className="nav-bar">
            <div className="logo">
                <Link to='/'><img src=' {/* enter logo here */}' /> </Link>
            </div>
            <div className="navLinks">
                <Link to="/additem">Post your Tech</Link>
            </div>
            <div className="navLinks">
                <Link to="/signup">Sign Up</Link>
            </div>
            <div className="navLinks">
                <Link to="/login">Log In</Link>
            </div>
            <Switch>
                <Route exact path='/' component={ItemsList} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <PrivateRoute path='/additem' component={AddItem} />
                </Switch>   
        </div>
    );
};

export default Navigation;