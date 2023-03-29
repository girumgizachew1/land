import React from 'react'
import { useDarkMode } from '../context/context'

function Agency() {
    const { darkMode } = useDarkMode()
    return (
        <div className={`flex flex-col justify-center first-letter py-20  ${darkMode === true ? 'bg-gray-900 text-gray-300 shadow-lg shadow-zinc-900/50 ' : 'bg-gray-100 text-gray-700 shadow-lg shadow-white/50'}`}>
            <div className="text-center py-2">
            <h1 className=" text-lg md:text-2xl mt-2 ">We Build Outstanding OnlyFans Careers.</h1>
                <p className="text-2xl   md:text-4xl mt-4 font-bold">Our Agency In Numbers</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mx-auto justify-center px-4 py-10 ">
                <div className={` hover:text-cyan-500 border flex flex-col items-center justify-center w-96 h-72  text-center text-4xl rounded-xl  ${darkMode === true ? 'bg-gray-800  shadow-xl border-zinc-900 text-zinc-100  shadow-black/20' : 'bg-gray-200 border-cyan-50 text-gray-900 shadow-lg shadow-white/50'}`}>
                    <h1 className="text-7xl font-bold mb-4">3+</h1>
                    <h1 className="text-2xl font-bold mb-4">Years of experience</h1>
                    <p className="text-gray-500 text-sm">Our Team Have Been <br /> Running Well About 3<br /> Years And Keep Going.</p>
                </div>
                <div className={`hover:text-cyan-500 flex flex-col items-center justify-center border w-96 h-72  text-center text-4xl rounded-xl  ${darkMode === true ? 'bg-gray-800 shadow-xl border-zinc-900 text-zinc-100 shadow-black/20' : 'bg-gray-200 border-cyan-50 text-gray-900 shadow-lg shadow-white/50'}`}>
                    <h1 className="text-7xl font-bold mb-4">28+</h1>
                    <h1 className="text-2xl font-bold mb-4">Successful Models </h1>
                    <p className="text-gray-500 text-sm">We Took More Then <br />28 Models From Zero<br />  To 5 Figures A Month..</p>

                </div>
                <div className={`hover:text-cyan-500 flex flex-col items-center justify-center border w-96 h-72  text-center text-4xl rounded-xl  ${darkMode === true ? 'bg-gray-800 shadow-xl border-zinc-900 text-zinc-100 shadow-black/20' : 'bg-gray-200 border-cyan-50 text-gray-900 shadow-lg shadow-white/50'}`}>
                    <h1 className="text-7xl font-bold mb-4">333%</h1>
                    <h1 className="text-2xl font-bold mb-4">More Traffic</h1>
                    <p className="text-gray-500 text-sm">It Depends On <br /> Your Starting Point.</p>

                </div>

            </div>
            <div>
                <button className="bg-cyan-900 text-white text-base px-4 py-4 mt-4 ">Book a call</button>
            </div>
        </div>

    )
}

export default Agency