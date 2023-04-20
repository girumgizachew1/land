import React from 'react'
import avatar from '../../assets/model9.jpg'
import { useDarkMode } from '../../context/context'
const FeedBackCard = () => {
    const {darkMode} = useDarkMode()  
    return (
    <div className={`fontmono rounded-3xl p-8 border shadow-sm my-8 mx-2   ${darkMode === true ? 'bg-gray-900 shadow-lg shadow-black/50 border-gray-900 text-gray-600' : 'bg-gray-100 border-gray-50 text-gray-400 shadow-lg shadow-white/50'}`}>
        <div className='flex justify-between'>
            <div className='flex flex-col md:flex-row gap-4'>
            <img src={avatar} alt="feedback" className='w-48 h-48 rounded-xl filter grayscale' />
            <div className={`text-lg font-medium  ${darkMode === true ? "text-gray-300": "text-gray-700"} `} >
                    <h1>Ava Patel</h1>
                    <p>Onlyfan Model</p>
                </div>
             </div>
        </div>
        <div className='py-8'>
            <h3 className='text-base'>I was hesitant to start using OnlyFans, but this agency made the process so easy and stress-free. They gave me lots of tips and tricks for creating content and marketing myself, and now I'm making more money than I ever thought possible.!</h3>
        </div>
    </div>
  )
}

export default FeedBackCard