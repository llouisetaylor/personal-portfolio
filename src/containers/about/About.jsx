import React, { Component } from 'react';

import '../../styles/containers/about/about.css';

import louise from '../../assets/louise.jpg';

class About extends Component {
    render() {
        return (
            <div className="about">
                <img
                    className="about__image"
                    src={ louise }
                    alt="Louise concentrating while dancing on a longboard by a tall building."
                />
            </div>
        );
    }
}

export default About;
