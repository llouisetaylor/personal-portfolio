import React from 'react';

import foregroundStars from '../../assets/backgrounds/frontstars.png';
import middlegroundStars from '../../assets/backgrounds/middlestars.png';
import backgroundStars from '../../assets/backgrounds/backstars.png';

import '../../styles/components/background/background.css';

const Background = ({xOffset, yOffset}) => (
    <div className="background">
        <div className="background__gradient" />
        <img
            src={ foregroundStars }
            className="background background__front"
            alt=""
            style={ { transform: `translate(${xOffset}px, ${yOffset}px)` } }
        />
        <img
            src={ middlegroundStars }
            className="background background__middle"
            alt=""
            style={ { transform: `translate(${xOffset * 0.4}px, ${yOffset * 0.4}px)` } }
        />
        <img
            src={ backgroundStars }
            className="background background__back"
            alt=""
            style={ { transform: `translate(${xOffset * 0.7}px, ${yOffset * 0.7}px)` } }
        />
    </div>
);

export default Background;
