import React from 'react';
import log from '../images/CatwikiLogo white.svg';
function Footer() {
    return (
        <div className='bg-black mob:w-full p-8 mt-10 flex mob:flex-col justify-between rounded-t-3xl'>
            <img className='mob:w-2/6' src={log} alt='' />
            <h1 className='text-white mob:w-full flex items-center'>created by Alvaro - devChallengues.io 2022</h1>
        </div>
    );
}

export default Footer;
