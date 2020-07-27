import React from 'react';

import '../../../styles/components/scenery/foreground/foreground.css';

const Foreground = () => (
    <div className="foreground">
        <img
            className="foreground__img foreground__left"
            src="https://llouisetaylor.s3.eu-west-2.amazonaws.com/artwork1.png" alt="" 
        />
        <img 
            className="foreground__img foreground__right"
            src="https://llouisetaylor.s3.eu-west-2.amazonaws.com/artwork2.png" alt=""
        />
    </div>
);

export default Foreground;
