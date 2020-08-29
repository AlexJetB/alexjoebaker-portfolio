import React from 'react';

import '../styles/AppNavigation.css';

import SCP_logo from '../images/SCP_logo.svg';

const Navigation = () => {
    return (
        <div className="Navigation-bar-outer">
            <img className="Nav-logo" src={SCP_logo} alt="SCP Foundation logo" />
            <div className="Navigation-bar-inner">
                <button class="Navigation-bar-button">Home</button>
                <button class="Navigation-bar-button">Background</button>
                <button class="Navigation-bar-button">Skillset</button>
                <button class="Navigation-bar-button">Projects</button>
            </div>
        </div>
    );
}

export default Navigation;