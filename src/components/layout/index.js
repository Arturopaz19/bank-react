import React from 'react'
import { Container } from 'react-bootstrap'
import Menu from './Menu'

export default function Layout (props) {
    const { children } = props
    return (
        <div>
            <Menu />
            <Container>
                {children}
            </Container>
        </div>
    )
}