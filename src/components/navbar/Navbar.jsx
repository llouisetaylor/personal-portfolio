import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/components/navbar/navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <NavLink exact to="/" className="navbar__item" aria-label="Home">
            <span className="navbar__text">Home</span>
            <span className="navbar__icon">🏠</span>
        </NavLink>

        <NavLink to="/portfolio" className="navbar__item" aria-label="Portfolio">
            <span className="navbar__text">Portfolio</span>
            <span className="navbar__icon">👩🏼‍💻</span>
        </NavLink>

        <NavLink to="/about" className="navbar__item" aria-label="About">
            <span className="navbar__text">About</span>
            <span className="navbar__icon">🙋🏼‍♀️</span>
        </NavLink>
    </nav>
);

export default Navbar;
