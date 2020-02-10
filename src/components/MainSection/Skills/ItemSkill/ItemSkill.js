import React from 'react';

import './ItemSkill.css';

const itemSkill = props => {
    return(
        <div className = "itemSkill">

            <div className = "titleSkill">
                <p>React</p>
            </div>
            
            <div className = "infoSkill">
                <div className = "imageSkill"></div>
                <div className = "levelSkill">
                    <div className = "levelBar"></div>
                </div>
            </div>

        </div>
    );
};

export default itemSkill;