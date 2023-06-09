import React from 'react'
import Agency from '../Components/Agency'
import Detailed from '../Components/Detailed'

import { useDarkMode } from '../context/context'
import Service from '../Components/Service'

function About() {
  const { darkMode, setDarkMode } = useDarkMode()
  return (
    <div className={`h-full w-full fontmono ${darkMode === true ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
      <div className={`h-[58vh] w-full flex flex-col lg:flex-row ${darkMode === true ? ' bg-gradient-to-r from-red-400 to-yellow-800' : 'bg-gradient-to-b from-red-100 to-yellow-200'} `}>
        <div className={`basis-1/2 flex  `} >
          <img src='./bg.png' className={`h-[45vh] lg:h-full w-full object-cover filter brightness-85 opacity-75  ${darkMode === true ? 'bg-gradient-to-t from-gray-900 to-transparent z-0' : 'bg-gradient-to-t from-gray-200  to-transparent z-0'}`} ></img>

        </div>
        <div className='basis-1/2 md:space-y-6 py-10 mx-10 flex items-center ' >
          <h1 className={` ${darkMode === true ? 'text-gray-200' : 'text-gray-800'} text-2xl md:text-3xl lg:text-4xl font-bold  `} >ABOUT OUR AGENCY</h1>
        </div>
      </div>

      <div className={`flex flex-col h-full tems-center ${darkMode === true ? 'bg-gray-800' : 'bg-gradient-to-b from-gray-200 to-gray-100'} `}>
        <div className='grid place-items-center h-full py-10'>
          <p className={`mt-4 px-10 text-base md:text-lg leading-6 text-gray-500 lg:px-40 text-center `}>
            Welcome to Josh&co, your go-to Onlyfans Agency dedicated to making your journey enjoyable and successful. We understand that diving into content creation can be challenging, particularly for newcomers.
            That's why our friendly team is here to provide personalized assistance and valuable guidance, empowering you to achieve success on Onlyfans. At Josh&co, we make real connections and a warm space where our clients feel important and supported all the time.
            Our team is ready to help you with making content, sharing it on social media, and talking with your fans. We want your Onlyfans experience to be fun and rewarding. Josh&co is more than an agency – we're your partners in success. As a client, you can trust us to be open, honest, and always there for you. We're proud to be part of your journey and work hard to give you personal help to reach your goals. Join Josh&co today, and let's make the good times happen. Together, we'll grow a strong community, make great content, and enjoy lasting success in the world of Onlyfans.
          </p>
        </div>
      </div>
      <Detailed/>
      <Agency />
    </div>
  )
}

export default About