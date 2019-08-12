import React from "react";
import { Helmet } from 'react-helmet';

import Project from "../../components/project/Project";
import FeaturedProject from "../../components/featured-project/FeaturedProject";

import "../../styles/containers/portfolio/portfolio.css";

import data from "./data.js";

const metaData = () => (
  <Helmet>
      <title>Porfolio | Louise Taylor</title>
      <link rel="canonical" href="https://llouisetaylor.com/portfolio" />
  </Helmet>
);

const renderFeaturedProjects = projects =>
  projects.map(project => (
    <FeaturedProject key={project.url} project={project} />
  ));

const renderProjects = projects =>
  projects.map(project => <Project key={project.url} project={project} />);

const Porfolio = () => (
  <div className="portfolio">
    { metaData() }
    <section className="portfolio__featured-projects">
      <h2>Featured work</h2>
      {renderFeaturedProjects(data.featured)}
    </section>
    <section>
      <h2>More projects</h2>
      <div className="portfolio__projects">
        { renderProjects(data.other) }
      </div>
    </section>
  </div>
);

export default Porfolio;
