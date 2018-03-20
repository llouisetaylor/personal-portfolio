import React from 'react';

import '../../styles/containers/about/about.css';

import dancing from '../../assets/louise.jpg';

const About = () => (
    <div className="about">
        <img
            className="about__image"
            src={ dancing }
            alt="Louise concentrating while dancing on a longboard by a tall building."
        />
        <p>I love longboarding (or anything that involves a board). I take part in an active longboarding community, I go to competitions and UK/world wide events, I have <a href="http://spin-skate.com/events/girl-skate-session-in-sheffield-uk/" target="blank">written for S*pin Skate magazine</a> (a European magazine that emphasises women in skateboarding) and completed an endurance event across The Netherlands. I love science and technology and continually keep up to date with new progressions in the field. I also love to play piano.</p>
    </div>
);

export default About;
