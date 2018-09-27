import React from 'react';

import '../../styles/containers/about/about.css';

import dancing from '../../assets/louise.jpg';

const About = () => (
    <div className="about">
        <img
            className="about__image"
            src={ dancing }
            alt="Longboard dancing in front of a corporate building."
        />
        <p>I love longboarding (or anything that involves a board). You can find me at competitions and UK/world wide events, I have <a href="http://spin-skate.com/events/girl-skate-session-in-sheffield-uk/" target="blank">written for S*pin Skate magazine</a> as well as <a href="https://thrillmagazine.com/boarders-without-borders/" target="blank">Thrill Magazine</a> and skated 200km around The Netherlands.</p>
    </div>
);

export default About;
