import React from 'react';
import { useDarkMode } from '../context/context';

function Hero() {
    const { darkMode ,setDarkMode } = useDarkMode();
    return (
        <div className='-mt-14 relative'>
            <div className={`absolute top-0 left-0 w-full h-full ${darkMode === true? 'bg-gradient-to-t from-zinc-900 to-transparent z-0' :'bg-gradient-to-t from-transparent/10 to-transparent/5 z-0'}`}></div>
            <img className='h-[70vh] w-full object-center	object-cover z-0' src='./Palmen.jpg' alt='background'></img>
        </div>
    );
}

export default Hero;