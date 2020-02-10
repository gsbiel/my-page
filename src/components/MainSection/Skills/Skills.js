import React from 'react';

import ItemSkill from './ItemSkill/ItemSkill';

import './Skills.css';

const skills = props => {
    return (
        <div className = "skills">
            <ItemSkill />
            <ItemSkill />
            <ItemSkill />
            <ItemSkill />
            <ItemSkill />
            <ItemSkill />
        </div>
    );
};

export default skills;