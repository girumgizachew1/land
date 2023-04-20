import React from 'react'
import { useDarkMode } from '../context/context'

function Detailed() {
    const { darkMode } = useDarkMode()

    return (
        <div className={`flex flex-col justify-center py-10 space-y-10 items-center first-letter ${darkMode === true ? 'bg-gray-800 text-gray-300 shadow-lg shadow-zinc-900/50 ' : 'bg-gray-100 text-gray-700 shadow-lg shadow-white/50'}`}>
            <div className='h-full w-full flex flex-col lg:flex-row-reverse gap-10 justify-center items-center px-4 md:px-40' >
                <div className='basis-1/2' >
                    <img src='./service1.png' className={`h-64 md:h-96 w-full object-cover filter brightness-85 opacity-75 rounded-2xl `} ></img>
                </div>
                <div className='basis-1/2 space-y-4 '>
                <p className="text-base font-semibold leading-6 text-green-600 uppercase">
                               Services
                            </p>
                    <h4 className="mt-2 text-2xl font-extrabold leading-8  sm:text-3xl sm:leading-9">
                        What we offer                            </h4>
                    <p className={`mt-4 text-base leading-6  ${darkMode === true ? 'text-gray-500 ' : ' text-gray-500'}`}>Are you looking to monetize your content and build a loyal fanbase? Look no further than our OnlyFans agency! Our experienced team can help you create and optimize your OnlyFans account, curate content that appeals to your audience, and implement marketing strategies to attract new subscribers.
                        We understand the importance of privacy and security, which is why we prioritize safeguarding your personal information and content. .</p>
                </div>
            </div>


            <div className='h-full w-full flex flex-col-reverse lg:flex-row-reverse gap-10 justify-center items-center px-4 md:px-40 ' >
                <div className='basis-1/2  space-y-4' >
                    <h1 className="mt-2 text-2xl font-extrabold leading-8  sm:text-3xl sm:leading-9">What Else</h1>
                    <p className={`mt-4 text-base leading-6 text-gray-500  ${darkMode === true ? 'text-gray-500 ' : ' text-gray-500'}`}>Our agency also offers discreet payment processing and support, so you can focus on creating and sharing the content your fans love. Join our community of successful OnlyFans creators and start earning money for your unique content today. Contact us to learn more about our services and how we can help you grow your fanbase and revenue on OnlyFans.
                    </p>
                </div>
                <div className='basis-1/2' >
                    <img src='./service2.png' className={`h-64 md:h-96 w-full object-cover filter brightness-85 opacity-75 rounded-2xl `} ></img>
                </div>
            </div>
        </div>
    )
}

export default Detailed