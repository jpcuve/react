import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/repos" activeClassName="activeNavLink">Repos</NavLink>
            <NavLink to="/about" activeClassName="activeNavLink">About</NavLink>
        </nav>
    )
}