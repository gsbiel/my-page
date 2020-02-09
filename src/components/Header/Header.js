import React from 'react';

import PacmanAnimation from './PacmanAnimation/PacmanAnimation';

import './Header.css';

const header = props => {
    return (
        <div className = "header">
            <PacmanAnimation />
        </div>
    );
};

export default header;