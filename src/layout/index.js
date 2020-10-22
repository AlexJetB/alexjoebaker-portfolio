import React from 'react';
import '../styles/Layout.css';

const PageOverview = (props) => {
    return (
        <div class="main">
            <h1>{props.header}</h1>
            {props.children}
        </div>
    );
};

export { PageOverview };