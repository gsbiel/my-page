import React from 'react';

import Pacman from './Pacman/Pacman';
import Ghost from './Ghost/Ghost';

import './PacmanAnimation.css';

const pacmanAnimation = props => {
    return (
        <div className = "pacmanAnimation">
            <div className = "path">
                <Pacman />
                <Ghost />
            </div>
        </div>
    );
};

export default pacmanAnimation;