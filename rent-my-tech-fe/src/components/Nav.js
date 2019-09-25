import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";

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
          <Nav.Item><Nav.Link href="/Login">Login</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/SignUp">Sign Up</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/AddItem">Post New Ad</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default Navigation;   