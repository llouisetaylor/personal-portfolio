import React from 'react';

import '../../styles/containers/work/work.css';

import data from './data.js';

const renderSection = (experience) => {
    return experience.map((job) => {
        return (
            <section key={ job.title } className="work__section">
                <h3 className="work__subheading">{ job.title }</h3>
                <p className="work__date">{ job.date }</p>
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
            <span key={ skill } className="work__skill--container">
                <span className="work__skill">
                    { skill }
                </span>
                { punctuation }
            </span>
        );
    });
}

const Work = () => (
    <div className="work">
        <div className="work__graphic">
            <div className="work__circle" />
            <div className="work__stick" />
        </div>
        <div className="work__content">
            <h2 className="work__heading">Skills</h2>
            <section>
                <div className="work__skills">
                    { getSkillsSection() }
                </div>
                <p className="work__description">I also have some experience with C++, Mocha, Chai, MongoDB and AWS.</p>
            </section>
            <h2 className="work__heading">Experience</h2>
            { renderSection(data.experience) }
            <h2 className="work__heading">Education</h2>
            { renderSection(data.education) }
        </div>
    </div>
);

export default Work;
