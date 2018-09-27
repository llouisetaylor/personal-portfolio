import React from 'react';

import FeaturedProject from '../../components/featured-project/FeaturedProject'

import '../../styles/containers/portfolio/portfolio.css';

import data from './data.js';

const renderProjects = (projects) => {
    return projects.map((project) => (
        <FeaturedProject
            key={ project.url }
            project={ project }
        />
    ));
};

const Porfolio = () => (
    <div className="portfolio">
        <h2>Featured projects</h2>
        <section className="portfolio__projects">
            { renderProjects(data.featured) }
        </section>
        <h2>More projects...</h2>
        <section className="portfolio__projects">
            { renderProjects(data.other) }
        </section>
    </div>
);

export default Porfolio;
