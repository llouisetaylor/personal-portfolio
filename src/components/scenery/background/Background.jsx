import React from 'react';

import '../../../styles/components/scenery/background/background.css';

const Background = ({xOffset, yOffset}) => (
    <div className="background">
        <div className="background__gradient" />
        <img
            src="https://llouisetaylor.s3.eu-west-2.amazonaws.com/frontstars.PNG"
            className="background background__front"
            alt=""
            style={ { transform: `translate(${xOffset}px, ${yOffset}px)` } }
        />
        <img
            src="https://llouisetaylor.s3.eu-west-2.amazonaws.com/middlestars.PNG"
            className="background background__middle"
            alt=""
            style={ { transform: `translate(${xOffset * 0.4}px, ${yOffset * 0.4}px)` } }
        />
        <img
            src="https://llouisetaylor.s3.eu-west-2.amazonaws.com/backstars.PNG"
            className="background background__back"
            alt=""
            style={ { transform: `translate(${xOffset * 0.7}px, ${yOffset * 0.7}px)` } }
        />
    </div>
);

export default Background;
