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
        <p>When I am not at my computer I am normally skateboarding. I am a pretty keen longboarder so I go to a bunch of competitions and events, I've skated 200km around the Netherlands and I have written a couple of articles in longboarding magazines including <a aria-label="An article I wrote for Spin Skate magazine" href="http://spin-skate.com/events/girl-skate-session-in-sheffield-uk/" target="blank">S*pin Skate</a> and <a aria-label="An article I wrote for Thrill magazine" href="https://thrillmagazine.com/boarders-without-borders/" target="blank">Thrill</a>.</p>
        <br />
        <p>You can find me on a few social medias, some are listed at the bottom of the page, I am pretty much always called @llouisetaylor (with a double L).</p>
    </div>
);

export default About;
