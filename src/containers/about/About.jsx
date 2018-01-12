import React, { Component } from 'react';

import '../../styles/containers/about/about.css';

import dancing from '../../assets/louise.jpg';
import freeride from '../../assets/louise2.jpg';

class About extends Component {
    render() {
        return (
            <div className="about">
                <p>I love longboarding (or anything that involves a board). I take part in an active longboarding community, I go to competitions and UK/world wide events, I have <a href="http://spin-skate.com/events/girl-skate-session-in-sheffield-uk/" target="blank">written for S*pin Skate magazine</a> (a European magazine that emphasises women in skateboarding) and completed an endurance event across The Netherlands. I love science and technology and continually keep up to date with new progressions in the field. I also love to play piano.</p>
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
