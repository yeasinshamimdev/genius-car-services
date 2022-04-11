import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} height='40' alt="Logo" />
                    </Navbar.Brand>
                    <div className='navbar-nav'>
                        <Nav className="me-auto">
                            <Link to='/' >Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/login">Login</Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;