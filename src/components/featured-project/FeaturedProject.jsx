import React from 'react';

import '../../styles/components/featured-project/featured-project.css';

const FeaturedProject = ({ project }) => (
  <div className="featured-project">
    <div className="featured-project__left">
      <img className="featured-project__image" src={project.image} alt="" />
    </div>

    <div className="featured-project__right">
      <a href={project.url}>
        <h2 className="featured-project__title">{project.title}</h2>
      </a>

      <div className="featured-project__description">
        <ul>
          {project.description.map(listItem => {
            return <li key={listItem}>{listItem}</li>;
          })}
        </ul>

        <ul className="featured-project__technologies">
          {project.technologies.map(technology => {
            return <li key={technology}>{technology}</li>;
          })}
        </ul>
      </div>
    </div>
  </div>
);

export default FeaturedProject;
