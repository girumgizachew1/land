import React from 'react'
import { useDarkMode } from '../context/context'

function Agency() {
    const { darkMode } = useDarkMode()
    return (
        <div className={`flex flex-col justify-center first-letter py-20  ${darkMode === true ? 'bg-zinc-800 border-zinc-700 shadow-lg shadow-zinc-900/50 ' : 'bg-zinc-200 shadow-lg shadow-white/50'}`}>
            <div className="text-center">
                <h1 className="text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">We Build Outstanding OnlyFans Careers.</h1>
                <p className="text-5xl mt-4">Our Agency In Numbers</p>
            </div>
            <div className="flex flex-row justify-center ml-8 mt-20 space-x-12  ">
                <div className="border w-96 h-96  text-center text-4xl rounded-xl border-zinc-400">Box 1</div>
                <div className="border w-96 h-96  text-center text-4xl rounded-xl">Box 2</div>
                <div className="border w-96 h-96  text-center text-4xl rounded-xl">Box 3</div>

            </div>
            <div>
                <button className="bg-blue-500 text-white text-base px-4 py-4 mt-4 ">Book a call</button>
            </div>
        </div>

    )
}

export default Agency