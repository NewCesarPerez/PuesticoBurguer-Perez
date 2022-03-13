import React from 'react'
import { Nav, Navbar,Container,NavDropdown } from 'react-bootstrap'
import '../App.css';
import CartIcon from './CartIcon';



const NavBar = () => {
  return(
      <>
      <div className='flexBetween text-secondary'>
    <Navbar bg="light" expand="lg" >
    <Container>
      <Navbar.Brand href="#home">Puestico Burguer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">login</Nav.Link>
          <Nav.Link href="#link">Acerca de Nosotros</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">El Lago</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">La China</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">El Puente</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <CartIcon/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
 
  </>)
  
}

export default NavBar