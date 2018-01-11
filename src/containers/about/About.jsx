import React, { Component } from 'react';

import '../../styles/containers/about/about.css';

import dancing from '../../assets/louise.jpg';
import freeride from '../../assets/louise2.jpg';

class About extends Component {
    render() {
        return (
            <div className="about">
                <img
                    className="about__image"
                    src={ dancing }
                    alt="Louise concentrating while dancing on a longboard by a tall building."
                />
                <img
                    className="about__image"
                    src={ freeride }
                    alt="Louise concentrating while sliding on a longboard in a grassy area."
                />
            </div>
        );
    }
}

export default About;
