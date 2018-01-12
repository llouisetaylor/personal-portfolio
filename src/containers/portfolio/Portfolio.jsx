import React, { Component } from 'react';

import '../../styles/containers/portfolio/portfolio.css';

import likeSkin from '../../assets/likeskin.jpg';
import make from '../../assets/make.jpg';
import beeHappy from '../../assets/beehappy.jpg';
import doughUniverse from '../../assets/doughuniverse.jpg';

class Porfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <h2>Projects I have supported and worked on</h2>
                <section className="portfolio__projects">
                    <a href="https://make.techwillsaveus.com" target="blank">
                        <img
                            className="portfolio__item"
                            src={ make }
                            alt="A screenshot of a website for kits made by Technology Will Save Us featuring lists of kit projects"
                        />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.arnold&hl=en" target="blank">
                        <img
                            className="portfolio__item"
                            src={ doughUniverse }
                            alt="A screenshot from the Dough Universe mobile and tablet with playful illustrations of dough balls"
                        />
                    </a>
                    <a href="https://mljgreer1.github.io" target="blank">
                        <img
                            className="portfolio__item"
                            src={ likeSkin }
                            alt="A screenshot of an online poetry magazine with pastel tones and features."
                        />
                    </a>
                </section>
                <h2>Fun projects and toys (personal)</h2>
                <section className="portfolio__projects">
                    <a href="https://llouisetaylor.github.io/JSToys/bee-happy/" target="blank">
                        <img
                            className="portfolio__item"
                            src={ beeHappy }
                            alt="A screenshot of a playful word game for children, with bright colours and a bumble bee character."
                        />
                    </a>
                </section>
            </div>
        );
    }
}

export default Porfolio;
