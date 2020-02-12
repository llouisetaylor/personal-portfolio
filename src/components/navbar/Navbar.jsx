import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/components/navbar/navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <NavLink exact to="/" className="navbar__item">
            Home
        </NavLink>

        <NavLink to="/portfolio" className="navbar__item">
            Portfolio
        </NavLink>

        <NavLink to="/about" className="navbar__item">
            About
        </NavLink>
    </nav>
);

export default Navbar;
