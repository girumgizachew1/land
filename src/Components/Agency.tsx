import React from 'react'
import { useDarkMode } from '../context/context'

function Agency() {
    const { darkMode } = useDarkMode()
    return (
        <div className={`flex flex-col justify-center first-letter py-20  ${darkMode === true ? 'bg-zinc-800 text-zinc-200 shadow-lg shadow-zinc-900/50 ' : 'bg-zinc-200 text-zinc-800 shadow-lg shadow-white/50'}`}>
            <div className="text-center py-2">
            <h1 className=" text-lg md:text-2xl mt-2 ">We Build Outstanding OnlyFans Careers.</h1>
                <p className="text-2xl  md:text-5xl mt-4 font-bold">Our Agency In Numbers</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mx-auto justify-center px-4 py-10 ">
                <div className={` hover:text-cyan-500 border flex flex-col items-center justify-center w-96 h-72  text-center text-4xl rounded-xl  ${darkMode === true ? 'bg-zinc-900 shadow-xl border-zinc-900 text-zinc-100  shadow-black/20' : 'bg-zinc-100 border-zinc-50 text-zinc-800 shadow-lg shadow-white/50'}`}>
                    <h1 className="text-7xl font-bold mb-4">3+</h1>
                    <h1 className="text-2xl font-bold mb-4">Years of experience</h1>
                    <p className="text-gray-500 text-sm">Our Team Have Been <br /> Running Well About 3<br /> Years And Keep Going.</p>
                </div>
                <div className={`hover:text-cyan-500 flex flex-col items-center justify-center border w-96 h-72  text-center text-4xl rounded-xl  ${darkMode === true ? 'bg-zinc-900 shadow-xl border-zinc-900 text-zinc-100 shadow-black/20' : 'bg-zinc-100 border-zinc-50 text-zinc-800 shadow-lg shadow-white/50'}`}>
                    <h1 className="text-7xl font-bold mb-4">28+</h1>
                    <h1 className="text-2xl font-bold mb-4">Successful Models </h1>
                    <p className="text-gray-500 text-sm">We Took More Then <br />28 Models From Zero<br />  To 5 Figures A Month..</p>

                </div>
                <div className={`hover:text-cyan-500 flex flex-col items-center justify-center border w-96 h-72  text-center text-4xl rounded-xl  ${darkMode === true ? 'bg-zinc-900 shadow-xl border-zinc-900 text-zinc-100 shadow-black/20' : 'bg-zinc-100 border-zinc-50 text-zinc-800 shadow-lg shadow-white/50'}`}>
                    <h1 className="text-7xl font-bold mb-4">333%</h1>
                    <h1 className="text-2xl font-bold mb-4">More Traffic</h1>
                    <p className="text-gray-500 text-sm">It Depends On <br /> Your Starting Point.</p>

                </div>

            </div>
            <div>
                <button className="bg-blue-500 text-white text-base px-4 py-4 mt-4 ">Book a call</button>
            </div>
        </div>

    )
}

export default Agency