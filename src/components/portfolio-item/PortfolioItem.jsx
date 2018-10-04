import React from 'react';

import '../../styles/components/portfolio-item/portfolio-item.css'

const PortfolioItem = ({ project }) => (
  <div key={project.url} className="portfolio-item">
    <a href={project.url} target="blank">
      <div className="portfolio-item__overlay">
        <ul>
          {project.description.map(listItem => {
            return <li key={listItem}>{listItem}</li>;
          })}
        </ul>
      </div>
      <img className="portfolio-item__image" src={project.image} alt="" />
    </a>
  </div>
);

export default PortfolioItem;
