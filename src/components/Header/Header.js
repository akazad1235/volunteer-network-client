import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import logo from '../../images/logos/Group-1329.png';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark" variant="warning">
        <Navbar.Brand href="#home"><img style={{width:'150px'}} src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">Donation</Nav.Link>
            <Nav.Link href="#deets">Event</Nav.Link>
            <Nav.Link href="#deets">Blog</Nav.Link>
            <Nav.Link href="#deets">Register</Nav.Link>
            <Nav.Link href="#deets">Admin</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;