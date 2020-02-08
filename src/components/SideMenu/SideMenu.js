import React from 'react';

import './SideMenu.css';
import './ContactBtn/ContactBtn';
import ContactBtn from './ContactBtn/ContactBtn';

const sideMenu = props => {
    return (
        <div className = "sideMenu">
            <div className = "imageSection">
                <div className="item">

                </div>
            </div>
            <div className="contactSection">
                <ContactBtn />
                <ContactBtn />
            </div>
      </div>
    );
};

export default sideMenu;