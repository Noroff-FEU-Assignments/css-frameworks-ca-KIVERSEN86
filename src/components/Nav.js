import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

function MainNav() {

    return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home"><h1>The YAY Company</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <Button variant="success">Go</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    );
}

export default MainNav;