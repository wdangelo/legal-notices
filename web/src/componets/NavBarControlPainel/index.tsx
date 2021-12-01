import React from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBarControlPainel(){

    return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
        <Navbar.Brand href="#">Painel de controle</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">Categorias</Nav.Link>
            <Nav.Link href="#action1">Sub-Categorias</Nav.Link>
            
        </Nav>
        <Button variant="outline-danger">Sair</Button>
        </Navbar.Collapse>
    </Container>
    </Navbar>
      )
};