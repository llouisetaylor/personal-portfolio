import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/components/navbar/navbar.css';
import '../../assets/fontello/css/fontello.css';

const Navbar = () => (
    <nav className="navbar">
        <NavLink exact to="/" className="navbar__item" aria-label="Home">
            <span className="navbar__text">Home</span>
            <i className="navbar__icon icon-home" />
        </NavLink>

        <NavLink to="/portfolio" className="navbar__item" aria-label="Portfolio">
            <span className="navbar__text">Portfolio</span>
            <i className="navbar__icon icon-laptop" />
        </NavLink>

        <NavLink to="/about" className="navbar__item" aria-label="About">
            <span className="navbar__text">About</span>
            <i className="navbar__icon icon-child" />
        </NavLink>
    </nav>
);

export default Navbar;
