import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Layout (props) {
    const { children } = props
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href={'/'}>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Link to={'/'}>Inicio</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={'/banks'}>Sucursales</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {children}
        </div>
    )
}