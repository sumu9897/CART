import React from 'react';
import {Container, Form, Nav, Navbar} from "react-bootstrap";
import ValidationHelper from "../utility/ValidationHelper.js";
import {NavLink} from "react-router-dom";
import logo from "../assets/image/logo.png";

const AppNavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary bg-white shadow-sm">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img className="nav-logo" src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/cart-list">Cart List</NavLink>
                            <NavLink className="nav-link" to="/login">Login</NavLink>




                        </Nav>
                        {
                            ValidationHelper.isLogin()?(
                                <button className="btn btn-primary">Logout</button>


                            ): (<button className="btn btn-primary">Login</button>)
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default AppNavBar;