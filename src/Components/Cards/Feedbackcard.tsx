import React from 'react'
import avatar from '../../assets/people2.jpg'
import { useDarkMode } from '../../context/context'
const FeedBackCard = () => {
    const {darkMode} = useDarkMode()  
    return (
    <div className={`fontmono rounded-3xl p-8 border shadow-sm my-8 mx-2   ${darkMode === true ? 'bg-gray-900 shadow-lg shadow-black/50 border-gray-900 text-gray-600' : 'bg-gray-100 border-gray-50 text-gray-400 shadow-lg shadow-white/50'}`}>
        <div className='flex justify-between'>
            <div className='flex flex-col md:flex-row gap-4'>
            <img src={avatar} alt="feedback" className='w-48 h-48 rounded-xl filter grayscale' />
            <div className={`text-lg font-medium  ${darkMode === true ? "text-gray-300": "text-gray-700"} `} >
                    <h1>Isabella Williams</h1>
                    <p>Onlyfan Model</p>
                </div>
             </div>
        </div>
        <div className='py-8'>
            <h3 className='text-base'>I've been disappointed with other OnlyFans agencies in the past, but this one is different. They've been transparent about their fees and policies, and they've helped me create a brand that feels authentic to me. I'm grateful for their support and guidance.</h3>
        </div>
    </div>
  )
}

export default FeedBackCard