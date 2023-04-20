import React from 'react';
import { useDarkMode } from '../context/context';
import { Link } from 'react-router-dom';
import model4 from '../assets/model2.jpg'

function Hero() {
    const { darkMode, setDarkMode } = useDarkMode();
    return (

        <div className={`relative h-[90vh] overflow-hidden ${darkMode === true? 'bg-gradient-to-t from-gray-900 to-transparent z-0' :'bg-gradient-to-t from-gray-200  to-transparent z-0'}}`}>
            <img src={model4} className="absolute object-cover w-full h-full filter brightness-85 opacity-90  grayscale object-center object-cover z-0 " />
            

            <div className="container relative z-0 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
                    <span className="font-bold text-yellow-400 uppercase">
                        Josh&co
                    </span>
                    <h1 className="mt-4 text-3xl md:text-6xl font-bold leading-tight text-white sm:text-7xl">
                        We Will Direct you to
                        <br />
                        Good Times
                    </h1>
                    <Link to="https://calendly.com/joshandco" className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                    schedule
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;