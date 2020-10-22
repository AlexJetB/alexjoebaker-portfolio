import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/AppNavigation.css';

import SCP_logo from '../images/SCP_logo.svg';

const Navigation = () => {
    return (
        <div className="Navigation-bar-outer">
            <img className="Nav-logo" src={SCP_logo} alt="SCP Foundation logo" />
            <div className="Navigation-bar-inner">
                <Link className="Navigation-bar-button" to="/">Home</Link>
                <Link className="Navigation-bar-button" to="/bg">Background</Link>
                <Link className="Navigation-bar-button" to="/sk">Skillset</Link>
                <Link className="Navigation-bar-button" to="/pr">Projects</Link>
                {/* <Link className="Navigation-bar-button" to="/ct">Contact</Link> */}
            </div>
        </div>
    );
}

export default Navigation;