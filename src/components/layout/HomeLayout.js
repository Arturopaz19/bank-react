import React from 'react'
import Menu from './Menu'

export default function HomeLayout (props) {
    const { children } = props
    return (
        <div>
            <Menu />
            {children}
        </div>
    )
}