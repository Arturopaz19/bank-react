import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Menu () {
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand href={'/'}>Sistema Bancario</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Item className={window.location.pathname === '/' ? 'nav-current' : ''}>
                        <Link to={'/'}>Inicio</Link>
                    </Nav.Item>
                    <Nav.Item className={window.location.pathname === '/banks' ? 'nav-current' : ''}>
                        <Link to={'/banks'}>Bancos</Link>
                    </Nav.Item>
                    <Nav.Item className={window.location.pathname === '/branches' ? 'nav-current' : ''}>
                        <Link to={'/branches'}>Sucursales</Link>
                    </Nav.Item>
                    <Nav.Item className={window.location.pathname === '/employees' ? 'nav-current' : ''}>
                        <Link to={'/employees'}>Empleados</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}