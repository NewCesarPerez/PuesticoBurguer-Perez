import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import '../App.css';
const NavBar = () => {
  return(
    <div className='w-100'>     
<Navbar bg="warning" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Puestico Burger</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/category/Platos">Platos</Nav.Link>
        <Nav.Link as={Link} to="/category/Bebidas">Bebidas</Nav.Link>
        <Nav.Link as={Link} to="/category/Postres">Postres</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Sobre nosotros</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Agradecimientos</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>)
  
}

export default NavBar