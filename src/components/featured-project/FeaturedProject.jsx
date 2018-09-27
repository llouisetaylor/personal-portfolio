import React from 'react';

import '../../styles/components/featured-project/featured-project.css'
import '../../assets/fontello/css/fontello.css';

const FeaturedProject = ({ project }) => (
  <div className="featured-project">

    <div className="featured-project__left">
      <img
        src={ project.image }
        alt=""
      />
    </div>

    <div className="featured-project__right">

      <div className="featured-project__link">
        <a href={ project.url }>
          <i className="icon-link" />
        </a>
      </div>

      <h2 className="featured-project__title">{ project.title }</h2>

      <div className="featured-project__description">
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

    </div>
  </div>
);

export default FeaturedProject;
