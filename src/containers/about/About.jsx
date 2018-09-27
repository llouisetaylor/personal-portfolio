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
        <p>I am currently employed as a Software Engineer at the BBC, with a particular interest in web accessibility. I've been honing my skills as a web developer for the past 2 years in industry and constantly learning in my spare time on personal projects.</p>
        <br />
        <p>My hobbies include longboarding (or anything that involves a board). You can find me at competitions and UK/world wide events, I have <a href="http://spin-skate.com/events/girl-skate-session-in-sheffield-uk/" target="blank">written for S*pin Skate magazine</a> as well as <a href="https://thrillmagazine.com/boarders-without-borders/" target="blank">Thrill Magazine</a> and skated 200km around The Netherlands.</p>
    </div>
);

export default About;
