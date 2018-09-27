import React from 'react';

import '../../styles/containers/portfolio/portfolio.css';

import data from './data.js';

const renderProjects = (projects) => {

    return projects.map((project) => {

        return (
            <div
                key={ project.url }
                className="portfolio__item"
            >
                <a href={ project.url } target="blank">
                    <div className="portfolio__overlay">
                        <ul>
                            {
                                project.description.map((listItem) => {
                                    return (
                                        <li key={ listItem }>{ listItem }</li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <img
                        className="portfolio__image"
                        src={ project.image }
                        alt=""
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
            { renderProjects(data.professional) }
        </section>
        <h2>Personal projects</h2>
        <section className="portfolio__projects">
            { renderProjects(data.personal) }
        </section>
    </div>
);

export default Porfolio;
