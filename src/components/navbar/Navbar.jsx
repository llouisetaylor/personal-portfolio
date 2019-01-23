import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/components/navbar/navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <NavLink exact to="/" className="navbar__item">
            <span className="navbar__text">Home</span>
            <span className="navbar__icon" role="img" aria-label="Home">🏠</span>
        </NavLink>

        <NavLink to="/portfolio" className="navbar__item">
            <span className="navbar__text">Portfolio</span>
            <span className="navbar__icon" role="img" aria-label="Portfolio">👩🏼‍💻</span>
        </NavLink>

        <NavLink to="/about" className="navbar__item">
            <span className="navbar__text">About</span>
            <span className="navbar__icon" role="img" aria-label="About">🙋🏼‍♀️</span>
        </NavLink>
    </nav>
);

export default Navbar;
