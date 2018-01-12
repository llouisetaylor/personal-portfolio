import React, { Component } from 'react';

import '../../styles/components/footer/footer.css';

import github from '../../assets/github.svg';
import medium from '../../assets/medium.svg';
import linkedin from '../../assets/linkedin.svg';

const svgStyles = {
    height: '40px',
    width: '40px',
    padding: '10px'
};

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a href="https://github.com/llouisetaylor" target="blank">
                    <img
                        src={ github }
                        alt="The GitHub logo"
                        style={ svgStyles } />
                </a>
                <a href="https://www.linkedin.com/in/louise-taylor-757a55130/" target="blank">
                    <img
                        src={ linkedin }
                        alt="The LinkedIn logo"
                        style={ svgStyles }
                    />
                </a>
                <a href="https://medium.com/@llouisetaylor" target="blank">
                    <img
                        src={ medium }
                        alt="The Medium logo"
                        style={ svgStyles }
                    />
                </a>
            </div>
        );
    }
}

export default Footer;
