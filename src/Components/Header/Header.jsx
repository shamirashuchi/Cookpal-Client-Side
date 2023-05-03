import React, { useContext } from 'react';
import "./Header.css";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Activelink from '../Activelink/Activelink';
import { AuthContext } from '../../Providers/Authprovider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <h2>Cookpal</h2>
          <Nav className="mx-auto">
            <Activelink to="/">Home</Activelink>
            <Activelink  style={{marginLeft:"6rem"}} to="/blog">Blog</Activelink>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
            {user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                    <Link to="/login"><Button variant="secondary">Login</Button></Link>
            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;