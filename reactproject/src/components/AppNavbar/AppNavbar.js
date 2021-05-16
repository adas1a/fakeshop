import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import Login from "./Login/Login";
import NavLink from "./NavLink/NavLink";


function AppNavbar() {

    return (
        <div className="nav-stay">
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="text-center">
                <Navbar.Brand href="#home"> Learn Web </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to="/"><span>Home</span></NavLink>
                        <NavLink to="/products" children="Products"/>
                        <Login/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}

export default AppNavbar;