import React from 'react';
import { Helmet } from 'react-helmet';

import { yearsFromNow } from '../../util/handy-things'

import '../../styles/containers/about/about.css';
import louise from '../../assets/louise.png';

const metaData = () => (
    <Helmet>
        <title>About | Louise Taylor</title>
        <link rel="canonical" href="https://llouisetaylor.com/about" />
    </Helmet>
);

const About = () => (
    <div className="about">
        { metaData() }
        <img src={ louise } alt="Illustration of Louise skateboarding" className="about__image" />
        <div className="about__text">
            <p>Hello, I am Louise and by profession I am a software engineer. { yearsFromNow(new Date('2017/07/18')) } I graduated from the University of Sheffield with a Masters degree in Physics and since then I have been working as a web developer with a particular interest in accessibility.</p>
            <br />
            <p>I currently work at BBC Sounds, previously I have worked at <a href="https://make.techwillsaveus.com/" target="_blank" rel="noopener noreferrer">Technology Will Save Us</a> and BBC Internal Web Apps.</p>
        </div>
    </div>
);

export default About;
