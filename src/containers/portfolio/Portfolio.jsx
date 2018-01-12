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
                <h2>Projects I have worked on</h2>
                <section className="portfolio__projects">
                    <a href="https://make.techwillsaveus.com" target="blank">
                        <div className="portfolio__item">
                            <div className="portfolio__overlay">
                                <ul>
                                    <li>Lead a redesign project for our learning platform.</li>
                                    <li>Built several experiences including a user sharing feature and support for multiple translations.</li>
                                    <li>Technologies: React, Redux, Sass</li>
                                </ul>
                            </div>
                            <img
                                className="portfolio__image"
                                src={ make }
                                alt="A screenshot of a website for kits made by Technology Will Save Us featuring lists of kit projects"
                            />
                        </div>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.arnold&hl=en" target="blank">
                        <div className="portfolio__item">
                            <div className="portfolio__overlay">
                                <ul>
                                    <li>Supported the development of a native app.</li>
                                    <li>Technologies: React Native.</li>
                                </ul>
                            </div>
                            <img
                                className="portfolio__image"
                                src={ doughUniverse }
                                alt="A screenshot from the Dough Universe mobile and tablet with playful illustrations of dough balls"
                            />
                        </div>
                    </a>
                    <a href="https://mljgreer1.github.io" target="blank">
                        <div className="portfolio__item">
                            <div className="portfolio__overlay">
                                <ul>
                                    <li>My first collaborative website, built as part of Code First: Girls beginners web development course.</li>
                                    <li>Built a website for a friend's poetry magazine.</li>
                                    <li>Technologies: jQuery and VanillaJS.</li>
                                </ul>
                            </div>
                            <img
                                className="portfolio__image"
                                src={ likeSkin }
                                alt="A screenshot of an online poetry magazine with pastel tones and features."
                            />
                        </div>
                    </a>
                </section>
                <h2>Personal projects</h2>
                <section className="portfolio__projects">
                    <a href="https://llouisetaylor.github.io/JSToys/bee-happy/" target="blank">
                        <div className="portfolio__item">
                            <div className="portfolio__overlay">
                                <ul>
                                    <li>This web app determines if a text entry is happy, sad or unknown based on a predetermined set of keywords and displays this on a scale.</li>
                                    <li>Technologies: jQuery and VanillaJS.</li>
                                </ul>
                            </div>
                            <img
                                className="portfolio__image"
                                src={ beeHappy }
                                alt="A screenshot of a playful word game for children, with bright colours and a bumble bee character."
                            />
                        </div>
                    </a>
                </section>
            </div>
        );
    }
}

export default Porfolio;
