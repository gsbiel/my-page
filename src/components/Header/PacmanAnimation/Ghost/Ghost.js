import React from 'react';

import './Ghost.css';

const ghost = props => {
    return (
        <div className = "ghost">
            <div className = "eyes"></div>
            <div className = "skirt"></div>
        </div>
    );
};

export default ghost;