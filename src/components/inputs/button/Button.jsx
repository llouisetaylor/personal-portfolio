import React from 'react';

import '../../../styles/components/inputs/button/button.css'

const Button = ({ text, onClick, ariaLabel, children }) => (
    <button
        className="button"
        aria-label={ ariaLabel }
        onClick={ onClick }
    >
        { children }
    </button>
);

export default Button;
