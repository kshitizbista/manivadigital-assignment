import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import './AppNavBar.css';

function AppNavBar() {
    return (
        <Navbar expand="sm">
            <Navbar.Brand href="#"> Maniva Digital</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link>
                        <NavLink to={"/home"}>Home</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to={"/maniva-crm"}>CRM</NavLink>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AppNavBar;
