import React from 'react'

import '../../styles/components/project/project.css'

const Project = ({ project }) => (
  <div className="project">
    <a href={ project.url } target="blank">
      <div className="project__overlay">
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
      <img
        className="project__image"
        src={ project.image }
        alt=""
      />
    </a>
  </div>
);

export default Project;
