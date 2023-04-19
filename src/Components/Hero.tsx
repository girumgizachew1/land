import React from 'react';
import { useDarkMode } from '../context/context';

function Hero() {
    const { darkMode ,setDarkMode } = useDarkMode();
    return (
        <div className='-mt-14 relative'>
            <div className={`absolute top-0 left-0 w-full h-full ${darkMode === true? 'bg-gradient-to-t from-gray-900 to-transparent z-0' :'bg-gradient-to-t from-gray-200  to-transparent z-0'}`}></div>
            <img className='h-[48vh] mt-24 md:h-[70vh] w-full object-center	object-cover z-0' src='./bg.png' alt='background'></img>
        </div>
    );
}

export default Hero;