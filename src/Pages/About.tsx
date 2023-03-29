import React from 'react'
import Agency from '../Components/Agency'
import { useDarkMode } from '../context/context'

function About() {
    const { darkMode, setDarkMode } = useDarkMode()
  return (
    <div className='h-full w-full'>
        <div className={`h-96 w-full flex flex-col md:flex-row ${darkMode === true ? 'bg-gray-900 ' : 'bg-gray-100'}`}>
          <div className='basis-1/2 flex' >
          <img src='./bg.png' className='h-full w-full object-cover filter brightness-85 opacity-75 ' ></img>
     
          </div>
          <div className='basis-1/2 space-y-6 py-20 mx-10' >
            <h1 className={` ${darkMode === true ? 'text-gray-200': 'text-gray-800' } text-2xl md:text-3xl lg:text-4xl font-bold  `} >ABOUT OUR AGENCY</h1>
            <p className='text-gray-400 text-base lg:pr-64 ' >Bunny Studios, established in 2019, is the top one Onlyfans Model Agency in Europe, representing some of the industry’s most successful models.</p>
            <p className='text-gray-400 text-base lg:pr-64 ' >Our dedicated team of highly experienced professionals has enabled us to sustain its success and dominate the OnlyFans world over the last years.</p>
          </div>

        </div>
        <Agency/>
        <div className='w-full flex' >
          <img src='./image1.jpg' className='basis-1/2 w-full brightness-85 opacity-75' ></img>
          <img src='./image1.jpg' className='basis-1/2 w-full brightness-85 opacity-75' ></img>
        </div>
        
        


    </div>
  )
}

export default About