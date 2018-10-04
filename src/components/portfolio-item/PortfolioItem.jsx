import React from "react";

import "../../styles/components/portfolio-item/portfolio-item.css";

const PortfolioItem = ({ project }) => (
  <a href={project.url} target="blank">
    <div key={project.url} className="portfolio-item">
      <div className="portfolio-item__overlay">
        <ul>
          {project.description.map(listItem => {
            return <li key={listItem}>{listItem}</li>;
          })}
        </ul>
      </div>
      <img className="portfolio-item__image" src={project.image} alt="" />
    </div>
  </a>
);

export default PortfolioItem;
