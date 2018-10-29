import React, { Fragment } from 'react';

import foregroundStars from '../../assets/frontstars.png';
import middlegroundStars from '../../assets/middlestars.png';
import backgroundStars from '../../assets/backstars.png';

const Background = ({xOffset, yOffset}) => (
    <Fragment>
        <img
            src={ foregroundStars }
            className="App__background App__background--front"
            alt=""
            style={ { transform: `translate(${xOffset}px, ${yOffset}px)` } }
        />
        <img
            src={ middlegroundStars }
            className="App__background App__background--middle"
            alt=""
            style={ { transform: `translate(${xOffset * 0.4}px, ${yOffset * 0.4}px)` } }
        />
        <img
            src={ backgroundStars }
            className="App__background App__background--back"
            alt=""
            style={ { transform: `translate(${xOffset * 0.7}px, ${yOffset * 0.7}px)` } }
        />
    </Fragment>
);

export default Background;
