import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/"><Nav.Link>Inicio</Nav.Link></LinkContainer>
            <LinkContainer to="/shop"><Nav.Link>Tienda</Nav.Link></LinkContainer>
            <LinkContainer to="/blog"><Nav.Link>Blog</Nav.Link></LinkContainer>
            <LinkContainer to="/cart"><Nav.Link>Cart</Nav.Link></LinkContainer>
          
            <NavDropdown title="Instrucciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Instrucciones Basicas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header