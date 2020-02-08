import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ContactBtn.css'

const contactBtn = props => {

    let icon = null;
    let text = null;

    if(props.type == 'git'){
        icon = <FontAwesomeIcon icon={["fab","github"]} size="3x"/>;
        text = "github.com/gsbiel";
    }
    else if(props.type == 'linkedin'){
        icon = <FontAwesomeIcon icon={["fab","linkedin"]} size="3x"/>;
        text = "linkedin.com/in/gabriel-gaspar"
    }
    else{
        icon = <FontAwesomeIcon icon="envelope" size="3x"/>;
        text = "Contact-me!"
    }

    return(
        <div className = "contactBtn">
            {icon}
            <span className="btnText">{text}</span>
        </div>
    );
};

export default contactBtn;