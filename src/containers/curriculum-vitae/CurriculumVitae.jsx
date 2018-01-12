import React, { Component } from 'react';

import '../../styles/containers/curriculum-vitae/curriculum-vitae.css';

import data from './data.js';

class CurriculumVitae extends Component {

    getEducationSection() {
        return data.education.map((establishment) => {
            return (
                <section className="cv__section">
                    <h3 className="cv__subheading">{ establishment.title }</h3>
                    <h3 className="cv__date">{ establishment.date }</h3>
                </section>
            );
        });
    }

    getExperienceSection() {
        return data.experience.map((job) => {
            return (
                <section className="cv__section">
                    <h3 className="cv__subheading">{ job.title }</h3>
                    <h3 className="cv__date">{ job.date }</h3>
                </section>
            )
        });
    }

    getSkillsSection() {
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

    render() {
        return (
            <div className="cv">
                <div className="cv__graphic">
                    <div className="cv__circle" />
                    <div className="cv__stick" />
                </div>
                <div className="cv__content">
                    <h2 className="cv__heading">Skills</h2>
                    <section>
                        <div className="cv__skills">
                            { this.getSkillsSection() }
                        </div>
                        <p className="cv__description">I also have some experience with C++,Mocha, Chai, Node, Express, MongoDB and php.</p>
                    </section>
                    <h2 className="cv__heading">Experience</h2>
                    { this.getExperienceSection() }
                    <h2 className="cv__heading">Education</h2>
                    { this.getEducationSection() }
                </div>
            </div>
        );
    }
}

export default CurriculumVitae;
