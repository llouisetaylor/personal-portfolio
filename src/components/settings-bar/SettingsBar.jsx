import React from 'react';

import Select from '../inputs/select/Select.jsx';

import '../../styles/components/settings-bar/settings-bar.css';

const SettingsBar = ({ toggleBackgroundButton, changeFont }) => (
    <div className="settings-bar">
        { toggleBackgroundButton }

        <Select
            text="Change font"
            ariaLabel="Choose a font"
            id="change-font"
            options={ ['Arial', 'Comic Sans', 'Default'] }
            onSelect={ changeFont }
        />
    </div>
);

export default SettingsBar;
