import React from 'react'
import { useDarkMode } from '../context/context'
import model4 from '../assets/model4.jpg'
import model6 from '../assets/model6.jpg'
import model5 from '../assets/model5.jpg'
import model7 from '../assets/model7.jpg'
import { Link } from 'react-router-dom'
function models() {
    const { darkMode} = useDarkMode()
    return (
        <div className={`fontmono px-4 py-20 bg-lightblue ${darkMode === true ? 'bg-gray-800 text-gray-300 shadow-lg shadow-zinc-900/50 ' : 'bg-gray-200 text-gray-700 shadow-lg shadow-white/50'} `}>
            <div className="relative max-w-screen-xl p-4 px-4 mx-auto  sm:px-6 lg:px-8 py-26 lg:mt-6">
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                            <p className="text-base font-semibold leading-6 text-green-600 uppercase">
                                Our Models
                            </p>
                            <h4 className="mt-2 text-lg md:text-2xl font-extrabold leading-8  sm:text-3xl sm:leading-9">
                            Maximize Your Earnings and Reach Your Full Potential with Our Management Agency!
                                                        </h4>
                            <p className="mt-4 text-base md:text-lg leading-6 text-gray-500 dark:text-gray-300">
                            Our models are more than just pretty faces; they are intelligent, confident, and passionate individuals who are dedicated to their craft. From fitness gurus to fashion icons, our models bring a diverse range of expertise and skills to the table.                            </p>
                            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            account audit
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            Progress tracker
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            24/7 support
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            Free tips to improve your account
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            <Link to='./ourmodel' className='bg-green-600 text-white px-4 py-2 rounded-xl' >Our Models</Link>
                        </div>
                        <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                            <div className="relative space-y-4">
                                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img className="filter brightness-85 opacity-90  grayscale  w-32 rounded-lg shadow-lg md:w-56" width="200" src={model4} alt="1" />
                                    <img className="filter brightness-85 opacity-90  grayscale w-40 rounded-lg shadow-lg md:w-64" width="260" src={model5} alt="2" />
                                </div>
                                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img className="filter brightness-85 opacity-90  grayscale w-24 rounded-lg shadow-lg md:w-40" width="170" src={model6} alt="3" />
                                    <img className="filter brightness-85 opacity-90  grayscale w-32 rounded-lg shadow-lg md:w-56" width="200" src={model7} alt="4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default models