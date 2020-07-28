import React from 'react';
import SVG from 'react-inlinesvg';

import '../../styles/components/external-links/external-links.css';

import github from '../../assets/github.svg';
import medium from '../../assets/medium.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import codepen from '../../assets/codepen.svg';


const ExternalLinks = () => (
    <div className="external-links">
        <a href="https://github.com/llouisetaylor" target="blank" aria-label="GitHub">
            <SVG src={ github } className="__icon" />
        </a>
        <a href="https://codepen.io/llouisetaylor/" target="blank" aria-label="Codepen">
            <SVG src={ codepen } className="external-links__icon" />
        </a>
        <a href="https://www.linkedin.com/in/louise-taylor-757a55130/" target="blank" aria-label="LinkedIn">
            <SVG src={ linkedin } className="external-links__icon" />
        </a>
        <a href="https://medium.com/@llouisetaylor" target="blank" aria-label="Medium">
            <SVG src={ medium } className="external-links__icon" />
        </a>
        <a href="https://twitter.com/llouisetaylor" target="blank" aria-label="Twitter">
            <SVG src={ twitter } className="external-links__icon" />
        </a>
    </div>
);

export default ExternalLinks;
