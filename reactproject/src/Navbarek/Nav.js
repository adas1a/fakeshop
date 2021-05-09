import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import Login, {abc} from "./Login";
import {Link} from "react-router-dom";



function Navbarek() {

    const navStyle = {
        color: 'white'
    };

    return (
        <div className="Nav NavStay">
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="text-center">
                <Navbar.Brand href="#home"> Learn Web </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link to="/" style ={navStyle}>
                                <li>Home</li>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/products" style={navStyle}>
                                <li>Product</li>
                            </Link>
                        </Nav.Link>
                        <Login/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}

export default Navbarek;