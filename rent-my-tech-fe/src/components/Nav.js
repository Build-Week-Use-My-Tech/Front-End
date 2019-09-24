import React from "react";
import {Nav, Navbar, Link, Form, FormControl, Button} from "react-bootstrap";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const NavStyle = styled.div`
    display: flex;
    justify-content: space-between;
`
//needs more styling **backbround, text, hover, pointer, etc

const Navigation = () => {
    return(
        <Navbar>
            <NavStyle>
                {/* could use a logo */}
              <Navbar.Brand href="/">Use My Tech</Navbar.Brand>
              <Form inline>
                  {/* might not even need this bar */}
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
              </Form>
              <Nav className="mr-auto">
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                <Nav.Link href="/">Post New Ad</Nav.Link>
              </Nav>
            </NavStyle>
        </Navbar>
        
    );
};

export default Navigation;