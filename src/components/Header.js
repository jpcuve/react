import React from 'react'
import './Header.css';
import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <NavLink className="Header-menu-item" to="/">Home</NavLink>
            <NavLink className="Header-menu-item" to="/repos" activeClassName="activeNavLink">Repos</NavLink>
            <NavLink className="Header-menu-item" to="/todos" activeClassName="activeNavLink">Todos</NavLink>
            <NavLink className="Header-menu-item" to="/about" activeClassName="activeNavLink">About</NavLink>
        </nav>
    )
}