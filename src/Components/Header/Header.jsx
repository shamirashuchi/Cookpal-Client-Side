import React from 'react';
import "./Header.css";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Activelink from '../Activelink/Activelink';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <h2>Cookpal</h2>
          <Nav className="mx-auto">
            <Activelink to="/">Home</Activelink>
            <Activelink style={{marginleft:'20px'}}to="/blog">Blog</Activelink>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
           <Link to="/login"><Button variant="secondary">Login</Button></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;