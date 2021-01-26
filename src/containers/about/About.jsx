import React from 'react';

import { yearsFromNow } from '../../util/handy-things'

import '../../styles/containers/about/about.css';

const About = () => (
    <div className="about">
        <div className="about__text">
            <p>Hello, I am Louise and I am a full stack developer at <a href="https://www.bbc.co.uk/sounds" target="_blank" rel="noopener noreferrer">BBC Sounds</a>. { yearsFromNow(new Date('2017/07/18')) } I graduated from the University of Sheffield with a Masters degree in Physics. Since then I have also worked at <a href="https://make.techwillsaveus.com/" target="_blank" rel="noopener noreferrer">Technology Will Save Us</a> and BBC Internal Web Apps. As a software engineer, I specalise in front-end development, design and accessibility.</p>
            <br />
            <p>In my spare time I make and sell <a href="https://www.louiseanntaylor.com" target="_blank" rel="noopener noreferrer">illustrations</a>. I am also a STEM ambassador and volunteer in science and tech outreach.</p>
        </div>
    </div>
);

export default About;
