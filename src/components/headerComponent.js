import React, { useContext } from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartContext from 'contexts/cartContext/cartContext'

const HeaderComponent = () => {
  const { itemsCount } = useContext(CartContext)
  console.log('header', itemsCount)

  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/"><Nav.Link>Inicio</Nav.Link></LinkContainer>
            <LinkContainer to="/shop"><Nav.Link>Tienda</Nav.Link></LinkContainer>
            <LinkContainer to="/blog"><Nav.Link>Blog</Nav.Link></LinkContainer>
            <LinkContainer to="/cart"><Nav.Link>Cart {!!itemsCount && `(${itemsCount})`}</Nav.Link></LinkContainer>
          
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

export default HeaderComponent