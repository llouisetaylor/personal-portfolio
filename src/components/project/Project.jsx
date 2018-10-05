import React from 'react'

import '../../styles/components/project/project.css'

const Project = ({ project }) => (
  <a
    href={project.url}
    target="blank"
    aria-label={project.name}
    aria-describedby="project-description"
  >
    <div className="project">
      <div className="project__overlay">
        <h3 className="project__title">{ project.title }</h3>

        <ul className="project__description" id="project-description">
          {project.description.map(listItem => {
            return <li key={listItem}>{listItem}</li>;
          })}
        </ul>

        <ul className="project__technologies">
          {project.technologies.map(technology => {
            return <li key={technology}>{technology}</li>;
          })}
        </ul>
      </div>
      <img className="project__image" src={project.image} alt="" />
    </div>
  </a>
);

export default Project;
