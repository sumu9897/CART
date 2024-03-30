import React from 'react';
import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";

const AppNavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>

                    </Nav>

                    <Button className="btn btn-danger">Login</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavBar;