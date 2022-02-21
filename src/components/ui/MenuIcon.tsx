import React, { useState, useEffect } from 'react';

import OpenMenuIcon from '../../images/Open Menu Icon.svg';
import CloseMenuIcon from '../../images/Close Menu Icon.svg';

const MenuIcon = () => {
    const [menu, toggleMenu] = useState({
        isOpen: false,
        menuIcon: OpenMenuIcon,
    });

    useEffect(() => {
        menu.isOpen === true ? document.body.classList.add('open-menu') : document.body.classList.remove('open-menu');
    })

    const toggleMenuHandler = () => {
        menu.isOpen === false ? toggleMenu({ ...menu, isOpen: true, menuIcon: CloseMenuIcon }) : ( menu.isOpen === true ? toggleMenu({ ...menu, isOpen: false, menuIcon: OpenMenuIcon } ) : toggleMenu({ ...menu, isOpen: true, menuIcon: CloseMenuIcon }) );
    }

    return <button className='relative z-50 md:hidden' onClick={toggleMenuHandler}><img src={menu.menuIcon} /></button>
}

export default MenuIcon