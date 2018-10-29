import React from 'react';

import '../../../styles/components/inputs/select/select.css';

const getOptions = (options) => {
    return options.map((option, i) => {
        return <option key={`${option}-${i}`}>{ option }</option>
    })
}

const Select = ({ text, ariaLabel, id, options }) => (
    <div className="select">

        <label
            className="select__label"
            htmlFor={ id }
        >
            { ariaLabel }
        </label>


        <select
            className="select__dropdown button"
            id={ id }
        >
            <option value="" disabled selected>{ text }</option>
            { getOptions(options) }
        </select>

    </div>
)

export default Select;
