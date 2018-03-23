import React from 'react';

import '../../styles/containers/portfolio/portfolio.css';

import data from './data.js';

const getProfessionalProjects = () => {

    return data.professional.map((project) => {

        const description = project.description.map((listItem) => {
            return (
                <li>{ listItem }</li>
            );
        })

        return (
            <div className="portfolio__item">
                <a href={ project.url } target="blank">
                    <div className="portfolio__overlay">
                        <ul>
                            { description }
                        </ul>
                    </div>
                    <img
                        className="portfolio__image"
                        src={ project.image.url }
                        alt={ project.image.alt }
                    />
                </a>
            </div>
        )
    })
}

const getPersonalProjects = () => {

    return data.personal.map((project) => {

        const description = project.description.map((listItem) => {
            return (
                <li>{ listItem }</li>
            );
        })

        return (
            <div className="portfolio__item">
                <a href={ project.url } target="blank">
                    <div className="portfolio__overlay">
                        <ul>
                            { description }
                        </ul>
                    </div>
                    <img
                        className="portfolio__image"
                        src={ project.image.url }
                        alt={ project.image.alt }
                    />
                </a>
            </div>
        )
    })
}

const Porfolio = () => (
    <div className="portfolio">
        <h2>Professional projects</h2>
        <section className="portfolio__projects">
            { getProfessionalProjects() }
        </section>
        <h2>Personal projects</h2>
        <section className="portfolio__projects">
            { getPersonalProjects() }
        </section>
    </div>
);

export default Porfolio;
