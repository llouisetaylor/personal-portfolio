import React from 'react';

import '../../styles/containers/curriculum-vitae/curriculum-vitae.css';

import data from './data.js';

const renderSection = (experience) => {
    return experience.map((job) => {
        return (
            <section key={ job.title } className="cv__section">
                <h3 className="cv__subheading">{ job.title }</h3>
                <p className="cv__date">{ job.date }</p>
            </section>
        )
    });
}

const getSkillsSection = () => {
    const skills = data.skills;
    let punctuation;

    return skills.map((skill, i) => {
        if (i < skills.length - 1) {
            punctuation = ', ';
        } else {
            punctuation = '.';
        }

        return (
            <span key={ skill } className="cv__skill--container">
                <span className="cv__skill">
                    { skill }
                </span>
                { punctuation }
            </span>
        );
    });
}

const CurriculumVitae = () => (
    <div className="cv">
        <div className="cv__graphic">
            <div className="cv__circle" />
            <div className="cv__stick" />
        </div>
        <div className="cv__content">
            <h2 className="cv__heading">Skills</h2>
            <section>
                <div className="cv__skills">
                    { getSkillsSection() }
                </div>
                <p className="cv__description">I also have some experience with C++, Mocha, Chai, MongoDB and AWS.</p>
            </section>
            <h2 className="cv__heading">Experience</h2>
            { renderSection(data.experience) }
            <h2 className="cv__heading">Education</h2>
            { renderSection(data.education) }
        </div>
    </div>
);

export default CurriculumVitae;
