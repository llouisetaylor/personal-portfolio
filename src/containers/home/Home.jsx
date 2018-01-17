import React, { Component } from 'react';

import '../../styles/containers/home/home.css';

import foregroundStars from '../../assets/foregroundstars.png';
import backgroundStars from '../../assets/backgroundstars.png';

class Home extends Component {
    render() {
        return (
            <div className="profile">
                <img src={ foregroundStars } className="profile__background profile__background--front" alt="Various constellations" />
                <img src={ backgroundStars } className="profile__background profile__background--back" alt="Various constellations" />
                <h1 className="profile__heading">Louise<br/>Taylor</h1>
                <h2 className="profile__subheading">Junior Developer at Technology Will Save Us</h2>
            </div>
        );
    }
}

export default Home;
