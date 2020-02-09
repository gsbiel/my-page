import React from 'react';

import './NavButton.css';

const navButton = props => {
    return(
        <div className = "navButton">
            <span>{props.btnText}</span>
        </div>
    );
};

export default navButton;