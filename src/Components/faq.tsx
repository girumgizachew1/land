import React from 'react'
import { useDarkMode } from '../context/context'

function faq() {
    const { darkMode } = useDarkMode()
    return (
        <div className={`fontmono px-4 py-20 bg-lightblue ${darkMode === true ? 'bg-gray-900 text-gray-300 shadow-lg shadow-zinc-900/50 ' : 'bg-gray-100 text-gray-700 shadow-lg shadow-white/50'} `}>
            <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
                <h2 className="w-full mr-8 text-xl md:text-3xl font-extrabold leading-9 md:w-1/3">
                    Frequently-asked questions
                </h2>
                <dl className="w-full md:w-2/3">


                    <div className='flex' >
                        <div className="px-4">
                            <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-green-600 rounded-full font-heading bg-green-100">
                                1
                            </span>
                        </div>
                        <div>
                            <dt className="mb-4">
                                <h3 className="text-base md:text-xl font-semibold">
                                    What services does your OnlyFans agency offer?
                                </h3>
                            </dt>
                            <dd className="mb-16 text-sm md:text-baseleading-6 text-gray-500">
                                <p>
                                    Our OnlyFans agency offers a range of services to help creators grow their audience and increase their earnings on the platform. These services include content creation, marketing and promotion, subscriber management, and analytics and reporting. We work closely with our clients to understand their goals and develop a customized strategy to achieve them.                            </p>
                            </dd>
                        </div>
                    </div>



                    <div className='flex' >
                        <div className="px-4">
                            <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-green-600 rounded-full font-heading bg-green-100">
                                2
                            </span>
                        </div>
                        <div>
                            <dt className="mb-4">
                                <h3 className="text-base md:text-xl font-semibold">
                                    How much does it cost to work with your OnlyFans agency?                            </h3>
                            </dt>


                            <dd className="mb-16 text-sm md:text-base leading-6 text-gray-500">
                                <p>
                                    The cost of our services depends on a variety of factors, including the scope of the project, the level of customization required, and the duration of the engagement. We offer a range of pricing options to suit different budgets, from one-time project fees to ongoing monthly retainers. We are transparent about our pricing and work closely with our clients to ensure they are getting the best value for their investment. Contact us to learn more about our pricing and services.                            </p>
                            </dd>
                        </div>
                    </div>



                    <div className='flex' >
                        <div className="px-4">
                            <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-green-600 rounded-full font-heading bg-green-100">
                                3
                            </span>
                        </div>
                        <div>
                            <dt className="mb-4">
                                <h3 className=" text-base md:text-xl font-semibold">
                                    Can you help me manage my OnlyFans account?
                                </h3>
                            </dt>
                            <dd className="mb-16 text-sm md:text-base leading-6 text-gray-500">
                                <p>
                                    Yes, we offer subscriber management services to help creators manage their OnlyFans accounts. Our team can handle tasks such as responding to messages, scheduling posts, and updating subscription tiers. We work closely with our clients to ensure their account is running smoothly and they are providing a high-quality experience for their subscribers. Contact us to learn more about our subscriber management services.                            </p>
                            </dd>
                        </div>
                    </div>


                </dl>
            </div >
        </div >
    )
}

export default faq