import React from 'react';

import '../../../styles/components/inputs/select/select.css';

const toKebabCase = (string) => {
    return string.replace(/\s+/g, '-').toLowerCase()
}

const getOptions = (options) => {
    return options.map((option, i) => {
        return <option
            key={ `${option}-${i}` }
            value={ toKebabCase(option) }
        >
            { option }
        </option>
    })
}

const Select = ({ text, ariaLabel, id, options, onSelect }) => (
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
            onChange={ onSelect }
            defaultValue=""
        >
            <option value="" disabled>{ text }</option>
            { getOptions(options) }
        </select>

    </div>
)

export default Select;
