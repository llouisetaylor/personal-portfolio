import React from 'react';

import '../../styles/components/featured-project/featured-project.css';

const FeaturedProject = ({ project }) => (
  <a href={ project.url }>
    <div className="featured-project">
      <div className="featured-project__left">
        <img className="featured-project__image" src={ project.image } alt="" />
      </div>

      <div className="featured-project__right">
        <h3 className="featured-project__title featured-project__title--hide-mobile">{ project.title }</h3>

        <div className="featured-project__description">
          <h3 className="featured-project__title featured-project__title--hide-desktop">{ project.title }</h3>
          <ul>
            { project.description.map(listItem => {
              return <li key={ listItem }>{ listItem }</li>;
            }) }
          </ul>

          <ul className="featured-project__technologies">
            { project.technologies.map(technology => {
              return <li key={ technology }>{ technology }</li>;
            }) }
          </ul>
        </div>
      </div>
    </div>
  </a>
);

export default FeaturedProject;
