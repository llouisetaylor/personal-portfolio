import React from 'react';

import { yearsFromNow } from '../../util/handy-things'

import '../../styles/containers/about/about.css';

const About = () => (
    <div className="about">
        <div className="about__text">
            <p>Hello, I am Louise and I am a full stack software engineer at BBC Sounds. { yearsFromNow(new Date('2017/07/18')) } I graduated from the University of Sheffield with a Masters degree in Physics and since then I have been working as a web developer with a particular interest in accessibility.</p>
            <br />
            <p>I currently work at <a href="https://bbc.co.uk/sounds" target="_blank" rel="noopener noreferrer">BBC Sounds</a>, previously I have worked at <a href="https://make.techwillsaveus.com/" target="_blank" rel="noopener noreferrer">Technology Will Save Us</a> and BBC Internal Web Apps. Check the links at the top, or scroll down to see some of my work.</p>
        </div>
    </div>
);

export default About;
