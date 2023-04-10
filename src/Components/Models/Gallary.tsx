import React from "react";
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/people1.jpg'
import image3 from '../../assets/people2.jpg'
import image4 from '../../assets/people3.jpg'

import { useDarkMode } from "../../context/context";
const Gallery = () => {
    const { darkMode } = useDarkMode()
    return (
        <section
            className={`px-4 bg-opacity-50 h-full pb-10 pt-16 mx-auto   md:px-24 lg:px-8  ${darkMode === true ? 'bg-gray-900 text-gray-300 shadow-lg shadow-zinc-900/50 ' : 'bg-gray-100 text-gray-700 shadow-lg shadow-white/50'}`}
            id="gallery"
        >
            <div >
                <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
                    <div className="lg:w-1/2">
                        <h2 className="max-w-md mb-6 font-display text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none xl:max-w-lg">
                            <span className="text-red-accent-700">Our Models </span>
                            <br />
                            <span className="leading-none lg:leading-loose">
                                Spare a Though & Get Inspired
                            </span>
                            <div className="h-1 ml-auto duration-300 origin-left transform bg-cyan-600 scale-x-30 group-hover:scale-x-100 mt-2 sm:mt-0" />
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="font-body text-xs md:text-base">
                            Weddings in Bangladesh mark the union of rituals, lights and
                            traditions. Being the greatest occasion for most of the
                            Bangladeshi families, everybody wants to make these weddings worth
                            looking back to. You can be just a little more sure that down the
                            years, your pictures help you feel alive in the moment. Check out
                            our Gallery for more.
                        </p>
                    </div>
                </div>
            </div>

            {/* Gallery Images */}
            <div className="py-6 text-red-900">
                <div className="container mx-auto grid grid-cols-1 gap-4 p-4  lg:grid-cols-4 transition-all duration-500 ease-in-out">
                    <div className='relative w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 hover:opacity-90' >
                        <img
                            src={image1}
                            alt="Gallery"
                            className="filter brightness-85 opacity-90  grayscale object-center object-cover "
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 text-white p-2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-70">
                            <p>Prices range from $100 to $1000 per month.</p>
                        </div>
                    </div>
                    <img
                        alt="Gallery"
                        className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                        src={image1}
                    />
                    <img
                        alt="Gallery"
                        className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                        src={image1}
                    />
                    <img
                        alt="Gallery"
                        className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                        src={image1}
                    />
                    <img
                        alt="Gallery"
                        className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                        src={image1}
                    />
                    <img
                        alt="Gallery"
                        className="w-full h-full filter brightness-85 opacity-90  object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                        src={image1}
                    />
                    <img
                        alt="Gallery"
                        className="w-full h-full  filter brightness-85 opacity-90 object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                        src={image1}
                    />
                    <img
                        alt="Gallery"
                        className="w-full h-full filter brightness-85 opacity-90 object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                        src={image1}
                    />
                    <img
                        alt="Gallery"
                        className="w-full h-full filter brightness-85 opacity-90 object-center object-cover rounded shadow-sm min-h-48 hover:opacity-90"
                        src={image1}
                    />
                    <img
                        src={image1}
                        alt="Gallery"
                        className="w-full h-full  brightness-85 opacity-90 filter grayscale object-center object-cover col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 hover:opacity-90"
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;