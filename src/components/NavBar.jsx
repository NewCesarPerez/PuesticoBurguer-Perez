
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LINKS, DDLINKS } from "../JavaScript/Links";
import {React, useContext } from "react";
import { CartContext } from '../context/CartContext'
import "../App.css";
import CartWidget from "./CartWidget";
const NavBar = () => {

  const {cart}=useContext(CartContext);
  return (
    <div className="w-100">
      <Navbar bg="warning" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" href="#home">
            Puestico Burger
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {LINKS.map((link) => (
                <Nav.Link as={Link} to={link.url}>
                  {link.name}
                </Nav.Link>
              ))}
              <NavDropdown title="Mas" id="basic-nav-dropdown">
                {DDLINKS.map((link) => (
                  <Nav.Link as={Link} to={link.url}>
                    {link.name}
                  </Nav.Link>
                ))}
              </NavDropdown>
              {cart.length
              ?<CartWidget/>
              :""}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
