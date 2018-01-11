import React, { Component } from 'react';

import '../../styles/components/navbar/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a className="navbar__item" href="/">Home</a>
                <a className="navbar__item" href="/">About</a>
                <a className="navbar__item" href="/">Tab</a>
                <a className="navbar__item" href="/">Tab</a>
            </nav>
        );
    }
}

export default Navbar;
