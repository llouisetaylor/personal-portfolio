import React from 'react';

import PortfolioItem from '../../components/portfolio-item/PortfolioItem'

import '../../styles/containers/portfolio/portfolio.css';

import data from './data.js';

const renderProjects = (projects) => {
    return projects.map((project) => {
        return <PortfolioItem
            key={ project.url }
            project={ project }
        />
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
