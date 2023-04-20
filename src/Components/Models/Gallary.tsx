import React from "react";
import image1 from '../../assets/image1.jpg'
import model1 from '../../assets/model1.avif'
import model2 from '../../assets/model2.jpg'
import model3 from '../../assets/model3.jpeg'
import model4 from '../../assets/model4.jpg'
import model6 from '../../assets/model6.jpg'
import model5 from '../../assets/model5.jpg'
import model7 from '../../assets/model7.jpg'
import model8 from '../../assets/model8.jpg'
import model9 from '../../assets/model9.jpg'
import model10 from '../../assets/model10.jpg'
import model11 from '../../assets/model11.jpg'
import model12 from '../../assets/model12.avif'

import { useDarkMode } from "../../context/context";
const Gallery = () => {
    const { darkMode } = useDarkMode()
    return (
        <section
            className={`px-4 bg-opacity-50 h-full pb-10 pt-16 mx-auto   md:px-24 lg:px-8  ${darkMode === true ? 'bg-gray-900 text-gray-300 shadow-lg shadow-zinc-900/50 ' : 'bg-gray-100 text-gray-700 shadow-lg shadow-white/50'}`}
            id="gallery"
        >
            <div >
                <div className="flex flex-col mb-6 pt-10 lg:flex-row md:mb-10">
                    <div className="lg:w-1/2 mx-20 ">
                        <h2 className="max-w-md mb-6 font-display text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none xl:max-w-lg">
                            <span className="text-red-accent-700">Our Models </span>
                            <br />
                            <span className="leading-none lg:leading-loose">
                                Get Inspired With Their Story
                            </span>
                            <div className="h-1 ml-auto duration-300 origin-left transform bg-cyan-700 scale-x-30 group-hover:scale-x-100 mt-2 sm:mt-0" />
                        </h2>
                    </div>
                    <div className="lg:w-1/2 bg-gradient-to-r from-red-600 to-yellow-600 py-8 px-6 rounded-lg">
                        <p className="font-body text-lg text-white font-semibold tracking-wide">
                            Meet Our Gorgeous Models:
                        </p>
                        <p className="font-body text-xs md:text-base text-white font-medium">
                            Explore our Diverse and Exclusive OnlyFans Creators
                        </p>
                    </div>

                </div>
            </div>

            {/* Gallery Images */}
            <div className="py-6 text-red-900">
                <div className="container mx-auto grid grid-cols-1 gap-1 p-4  lg:grid-cols-4 transition-all duration-500 ease-in-out">
                    <div className='relative w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 hover:opacity-90' >
                        <img
                            src={model2}
                            alt="Gallery"
                            className="filter brightness-85 opacity-90  grayscale object-center object-cover "
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-90 flex flex-col items-center justify-center">
                            <div className="bg-yellow-700 rounded-xl p-8 flex flex-col items-center justify-center opacity-100" >
                                <h1 className="text-base md:text-2xl font-bold mb-2">Isabella Garcia</h1>
                                <h1 className="text-sm md:text-lg mb-2">Onlyfans Model</h1>
                                <h1 className="text-xs md:text-base">From $1200 to $2500 per month</h1>
                            </div>
                        </div>
                    </div>


                    <div className="relative w-full h-full">
                        <img
                            alt="Gallery"
                            className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                            src={model1}
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-90 flex flex-col items-center justify-center">
                            <div className="bg-yellow-700 rounded-xl p-8 flex flex-col items-center justify-center opacity-100" >
                            <h1 className="text-base md:text-lg  font-bold mb-2">Lily Johnson</h1>
                            <h1 className="text-sm md:text-base mb-2">Onlyfans Model</h1>
                            <h1 className="text-xs md:text-sm">From $1100 to $4500 per month</h1>
                        </div>
                        </div>

                    </div>

                    <div className="relative w-full h-full">
                        <img
                            alt="Gallery"
                            className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                            src={model3}
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-90 flex flex-col items-center justify-center">
                        <div className="bg-red-700 rounded-xl p-8 flex flex-col items-center justify-center opacity-100" >
                            <h1 className="text-base md:text-lg  font-bold mb-2">Sophia Rodriguez</h1>
                            <h1 className="text-sm md:text-base mb-2">Onlyfans Model</h1>
                            <h1 className="text-xs md:text-sm">From $400 to $3700 per month</h1>
                        </div>
                        </div>
                    </div>

                    <div className="relative w-full h-full">
                        <img
                            alt="Gallery"
                            className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                            src={model5}
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-90 flex flex-col items-center justify-center">
                        <div className="bg-red-700 rounded-xl p-8 flex flex-col items-center justify-center opacity-100" >
                            <h1 className="text-base md:text-lg  font-bold mb-2">Emily Martinez</h1>
                            <h1 className="text-sm md:text-base mb-2">Onlyfans Model</h1>
                            <h1 className="text-xs md:text-sm">From $700 to $2000 per month</h1>
                        </div>
                        </div>

                    </div>

                    <div className="relative w-full h-full">
                        <img
                            alt="Gallery"
                            className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                            src={model6}
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-90 flex flex-col items-center justify-center">
                            <div className="bg-yellow-700 rounded-xl p-8 flex flex-col items-center justify-center opacity-100" >
                            <h1 className="text-base md:text-lg  font-bold mb-2">Madison Kim</h1>
                            <h1 className="text-sm md:text-base mb-2">Onlyfans Model</h1>
                            <h1 className="text-xs md:text-sm">From $1700 to $2400 per month</h1>
                        </div>
                        </div>
                    </div>
                    <div className='relative w-full h-full  rounded shadow-sm col-span-2 row-span-2 min-h-96 md:col-start-1 md:row-start-1 ' >
                        <img
                            src={model8}
                            alt="Gallery"
                            className="filter brightness-85 opacity-90  grayscale object-center object-cover "
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-90 flex flex-col items-center justify-center">
                            <div className="bg-red-700 rounded-xl p-8 flex flex-col items-center justify-center opacity-100" >
                                <h1 className="text-base md:text-2xl font-bold mb-2">Katerina Alvarez</h1>
                                <h1 className="text-sm md:text-lg mb-2">Onlyfans Model</h1>
                                <h1 className="text-xs md:text-base">From $550 to $1400 per month</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <div className="container mx-auto grid grid-cols-1 gap-1 p-4  lg:grid-cols-4 transition-all duration-500 ease-in-out">
                <div className='relative w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 hover:opacity-90' >
                    <img
                        src={model10}
                        alt="Gallery"
                        className="filter brightness-85 opacity-90  grayscale object-center object-cover "
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-90 flex flex-col items-center justify-center">
                        <div className="bg-red-700 rounded-xl p-8 flex flex-col items-center justify-center opacity-100" >
                            <h1 className="text-base md:text-2xl font-bold mb-2">Ava Wong</h1>
                            <h1 className="text-sm md:text-lg mb-2">Onlyfans Model</h1>
                            <h1 className="text-xs md:text-base">From $1200 to $2000 per month</h1>
                        </div>
                    </div>
                </div>


                <div className="relative w-full h-full">
                    <img
                        alt="Gallery"
                        className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                        src={model12}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-90 flex flex-col items-center justify-center">
                        <div className="bg-yellow-700 rounded-xl p-8 flex flex-col items-center justify-center opacity-100" >
                            <h1 className="text-base md:text-lg  font-bold mb-4">Abigail Patel</h1>
                            <h1 className="text-sm md:text-base mb-4">Onlyfans Model</h1>
                            <h1 className="text-xs md:text-sm">From $600 to $1800 per month</h1>
                        </div>
                    </div>

                </div>

                <div className="relative w-full h-full">
                    <img
                        alt="Gallery"
                        className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                        src={model7}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-90 flex flex-col items-center justify-center">
                        <div className="bg-yellow-700 rounded-xl p-8 flex flex-col items-center justify-center opacity-100" >
                            <h1 className="text-base md:text-lg  font-bold mb-2">Scarlett Lee</h1>
                            <h1 className="text-sm md:text-base mb-2">Onlyfans Model</h1>
                            <h1 className="text-xs md:text-sm">From $1700 to $2600 per month</h1>

                        </div>
                    </div>

                </div>

                <div className="relative w-full h-full">
                    <img
                        alt="Gallery"
                        className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                        src={model11}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-90 flex flex-col items-center justify-center">
                        <div className="bg-yellow-700 rounded-xl p-8 flex flex-col items-center justify-center opacity-100" >
                            <h1 className="text-base md:text-lg  font-bold mb-2">Grace Davis</h1>
                            <h1 className="text-sm md:text-base mb-2">Onlyfans Model</h1>
                            <h1 className="text-xs md:text-sm">From $200 to $1400 per month</h1>

                        </div>
                    </div>

                </div>

                <div className="relative w-full h-full">
                    <img
                        alt="Gallery"
                        className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                        src={model9}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-90 flex flex-col items-center justify-center">
                        <div className="bg-red-700 rounded-xl p-8 flex flex-col items-center justify-center opacity-100" >
                            <h1 className="text-base md:text-lg  font-bold mb-2">Olivia Chen</h1>
                            <h1 className="text-sm md:text-base mb-2">Onlyfans Model</h1>
                            <h1 className="text-xs md:text-sm">From $450 to $800 per month</h1>
                        </div>
                    </div>

                </div>
                <div className='relative w-full h-full  rounded shadow-sm col-span-2 row-span-2 min-h-96 md:col-start-1 md:row-start-1 ' >
                    <img
                        src={model4}
                        alt="Gallery"
                        className="filter brightness-85 opacity-90  grayscale object-center object-cover "
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-90 flex flex-col items-center justify-center">
                        <div className="bg-yellow-700 rounded-xl p-8 flex flex-col items-center justify-center opacity-100" >
                            <h1 className="text-base md:text-2xl font-bold mb-2">elena devis </h1>
                            <h1 className="text-sm md:text-lg mb-2">Onlyfans Model</h1>
                            <h1 className="text-xs md:text-base">From $1400 to $2900 per month</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;