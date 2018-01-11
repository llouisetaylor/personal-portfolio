import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/components/navbar/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <NavLink exact to="/" className="navbar__item">Home</NavLink>
                <NavLink to="/portfolio" className="navbar__item">Portfolio</NavLink>
                <NavLink to="/cv" className="navbar__item">CV</NavLink>
                <NavLink to="/about" className="navbar__item">About</NavLink>
            </nav>
        );
    }
}

export default Navbar;
