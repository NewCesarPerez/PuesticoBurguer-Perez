import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LINKS } from "../JavaScript/Links";
import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css";
import CartWidget from "./CartWidget";
import imgLogo from "../imgLogo/logoPuesticoBurger.jpg";
const NavBar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="w-100 fontFamilyForm">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" href="#home">
            <img
              className="App-logo mx-5"
              src={imgLogo}
              alt="Logo de la marca"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="textColorNavBar" id="basic-navbar-nav">
            <Nav>
              {LINKS.map((link, index) => (
                <Nav.Link
                  className="textColorNavBar mx-5"
                  as={Link}
                  to={link.url}
                  key={index}
                >
                  {link.name}
                </Nav.Link>
              ))}
              {cart.length ? <CartWidget /> : ""}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
