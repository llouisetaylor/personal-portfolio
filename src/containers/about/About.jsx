import React from 'react';

import { yearsFromNow } from '../../util/handy-things'

import '../../styles/containers/about/about.css';

import dancing from '../../assets/louise.jpg';

const About = () => (
    <div className="about">
        <img
            className="about__image"
            src={ dancing }
            alt="Longboard dancing in front of a corporate building."
        />
        <p>Hi, my name is Louise, I am a software engineer living in London. { yearsFromNow(new Date('2017, July 18')) } I graduated from the University of Sheffield with a Masters degree in Physics and since then I have been working as a web developer with a particular interest in accessibility and have made some kinda <a href="/portfolio">cool stuff</a>.</p>
        <br />
        <p>These days I work on <a href="https://www.bbc.co.uk/sounds">BBC Sounds</a>, but previously I have worked at Technology Will Save Us and BBC Internal Web Apps.</p>
        <br />
        <p>When I am not at my computer I am normally skateboarding. I am a pretty keen longboarder so regularly attend competitions and UK/world wide events, I've skated 200km around the Netherlands and I have written a couple of articles in longboarding magazines including <a href="http://spin-skate.com/events/girl-skate-session-in-sheffield-uk/" target="blank">S*pin Skate</a> and <a href="https://thrillmagazine.com/boarders-without-borders/" target="blank">Thrill</a>.</p>
    </div>
);

export default About;
