import React from 'react';

import NavButton from './NavButton/NavButton';

import './NavMenu.css'

const navMenu = props => {
    return (
        <div className = "navMenu">
            <NavButton btnText = "Home"/>
            <NavButton btnText = "Formation"/>
            <NavButton btnText = "Skills"/>
            <NavButton btnText = "Projects"/>
        </div>
    );
};

export default navMenu;