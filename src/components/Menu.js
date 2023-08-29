import React from 'react';

import { AiOutlineCloseCircle } from 'react-icons/ai'

function Menu({setMenuVisible, handleAboutUsClick, handleAffiliateDisclosureClick}) {

    const closeMenu = () => {
        setMenuVisible(false)
    }

    return (
        <div className='menuContainer'>
            <AiOutlineCloseCircle size={30} color='#373737' className='menuCloseBtn' onClick={closeMenu} />
            <div className='menuItemContainer'>
                <p className='menuItem' onClick={handleAboutUsClick}>About Us</p>
                <p className='menuItem' onClick={handleAffiliateDisclosureClick}>Affiliate Disclosure</p>
            </div>
        </div>
    );
}

export default Menu;