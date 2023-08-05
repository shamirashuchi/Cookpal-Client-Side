import React, { useContext } from 'react';
import "./Header.css";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Activelink from '../Activelink/Activelink';
import { AuthContext } from '../../Providers/Authprovider';

const Header = () => {
  const { user, logOut,updateUserData} = useContext(AuthContext);

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
            <div>
            <Activelink to="/">Home</Activelink>
            </div>
            <div  className="ms-lg-5">
            <Activelink to="/blog">Blog</Activelink>
            </div>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
            {user ? <img style={{height:"20px",width:"20px"}}src={user.photoURL} alt="" /> :
                    <Link  to="/login"><Button style={{height:"40px",width:"70px"}} variant="secondary">Login</Button></Link>
            }
            </Nav.Link>
            <Button className='mt-2' style={{height:"40px",width:"70px"}} onClick={handleLogOut} variant="secondary">Logout</Button> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;