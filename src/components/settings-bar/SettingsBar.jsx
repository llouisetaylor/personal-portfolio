import React from 'react';

import '../../styles/components/settings-bar/settings-bar.css';

const SettingsBar = ({ toggleBackgroundButton }) => (
    <div className="settings-bar">
        { toggleBackgroundButton }
    </div>
);

export default SettingsBar;
