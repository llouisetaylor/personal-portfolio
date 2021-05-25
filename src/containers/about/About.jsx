import React from 'react';

import { yearsFromNow } from '../../util/handy-things'

import '../../styles/containers/about/about.css';

const About = () => (
    <div className="about">
        <div className="about__text">
            <p>Hello, I am Louise and I am a senior software engineer and accessibility champion at <a href="https://www.bbc.co.uk/sounds" target="_blank" rel="noopener noreferrer">BBC Sounds</a>. { yearsFromNow(new Date('2017/07/18')) } I graduated from the University of Sheffield with a Masters degree in Physics. Since then I have also worked at <a href="https://make.techwillsaveus.com/" target="_blank" rel="noopener noreferrer">Technology Will Save Us</a> and BBC Internal Web Apps. As an engineer I have a user-centric focus, I care about building accessible, performant and responsive applications whilst also investing time learning about smart, scalable solutions.</p>
            <br />
            <p>When I am not at my computer you can find me volunteering in science and tech initiatives as part of the STEM ambassadors network, making <a href="https://www.louiseanntaylor.com" target="_blank" rel="noopener noreferrer">illustrations</a> or skateboarding.</p>
        </div>
    </div>
);

export default About;
