import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <div className="nav-bar">
            <div className="logo">
                {/* enter logo here */}
            </div>
            <div className="navLinks">
                <Link to="/">Post your Tech</Link>
            </div>
            <div className="navLinks">
                <Link to="/">Sign Up</Link>
            </div>
            <div className="navLinks">
                <Link to="/">Log In</Link>
            </div>
        </div>
    );
};

export default Navigation;