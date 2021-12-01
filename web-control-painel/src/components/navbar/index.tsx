import React from "react"
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarHome = () => {

    function handleExit() {
        
    }
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Avisos Legais</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">

            <NavDropdown title="Cadastro" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/categories/create">Categorias</NavDropdown.Item>
                <NavDropdown.Item href="/sub-categories/create">Sub-Categorias</NavDropdown.Item>
            </NavDropdown>
            </Nav>

            <Nav>
            <Button variant="danger">sair</Button>
            </Nav>

            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBarHome