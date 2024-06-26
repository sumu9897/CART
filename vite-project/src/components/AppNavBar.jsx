import React from 'react';
import {Container, Form, Nav, Navbar} from "react-bootstrap";
import Helper from "../utility/Helper.js";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/image/logo.png";

const AppNavBar = () => {

    const logout=()=>{
        sessionStorage.clear();
        window.location.href="/"
    }
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary bg-white shadow">
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

                            {
                                Helper.isLogin() &&
                                <NavLink className="nav-link" to="/cart-list">Cart List</NavLink>
                            }

                        </Nav>
                        {
                            Helper.isLogin()?(
                                <button onClick={logout} className="btn btn-primary">Logout</button>
                            ): (<Link className="btn btn-primary" to="/login">Login</Link>)
                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default AppNavBar;