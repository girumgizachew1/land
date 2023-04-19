import React from 'react'
import { useDarkMode } from '../context/context'

function Section() {
  const { darkMode ,setDarkMode } = useDarkMode()
  return (
    <div className="section flex justify-center items-center py-10">
      <h1 className={`text-sm  md:text-xl  animate-travel bg-gradient-to-r from-red-600 to-yellow-600 py-8 px-6 rounded-lg text-white text-center`}>We will direct you to the good times," shows what we're all about. We want to help you reach your goals, like getting more fans, making more money, or making better content. We give you special services that fit your needs, like coaching, marketing tips, and help with technology, so you can stand out</h1>
    </div>
  )
}

export default Section