import React from 'react';
import image from '../images/CatwikiLogo.svg';
function Navbar() {
    return (
        <nav className='pb-[30px] mob:pb-4'>
            <div>
                <img className='' src={image} alt='catwiki' />
            </div>
        </nav>
    );
}

export default Navbar;
