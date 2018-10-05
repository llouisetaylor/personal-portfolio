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
        <ul id="project-description">
          {
            project.description.map(listItem => {
              return <li key={listItem}>{listItem}</li>;
            })
          }
        </ul>
      </div>
      <img className="project__image" src={project.image} alt="" />
    </div>
  </a>
);

export default Project;
