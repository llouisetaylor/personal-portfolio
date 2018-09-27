import React from 'react';

import Project from '../../components/project/Project'
import FeaturedProject from '../../components/featured-project/FeaturedProject'

import '../../styles/containers/portfolio/portfolio.css';

import data from './data.js';

const renderFeaturedProjects = (projects) => (
    projects.map((project) => (
        <FeaturedProject
            key={ project.url }
            project={ project }
        />
    ))
);

const renderProjects = (projects) => (
    projects.map((project) => (
        <Project
            key={ project.url }
            project={ project }
        />
    ))
)

const Porfolio = () => (
    <div className="portfolio">
        <h2>Featured projects</h2>
        <section className="portfolio__featured-projects">
            { renderFeaturedProjects(data.featured) }
        </section>
        <h2>More projects...</h2>
        <section className="portfolio__projects">
            { renderProjects(data.other) }
        </section>
    </div>
);

export default Porfolio;
