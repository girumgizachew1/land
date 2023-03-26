import React from 'react'
import avatar from '../assets/people2.jpg'
import { useDarkMode } from '../context/context'
const FeedBackCard = () => {
    const {darkMode} = useDarkMode()  
    return (
    <div className={`rounded-3xl p-8 border shadow-sm my-8 mx-2   ${darkMode === true ? 'bg-zinc-900 shadow-lg shadow-black/50 border-zinc-900 text-zinc-100' : 'bg-zinc-100 border-zinc-50 text-zinc-800 shadow-lg shadow-white/50'}`}>
        <div className='flex justify-between'>
            <div className='flex gap-4'>
            <img src={avatar} alt="feedback" className='w-48 h-48 rounded-xl filter grayscale' />
                <div className='text-base' >
                    <h1>Jenny Wilson</h1>
                    <p>UI/UX Designer</p>
                </div>
             </div>
        </div>
        <div className='py-8'>
            <h3 className='text-base text-zinc-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto praesentium distinctio excepturi dolor, nihil unde exercitationem eligendi sit quam nemo cumque, tenetur hic, quasi atque. Fuga saepe vitae cum quasi!</h3>
        </div>
    </div>
  )
}

export default FeedBackCard