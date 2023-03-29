import React from 'react'
import Agency from '../Components/Agency'
import FeedBack from '../Components/Feedback'
import { Footer } from '../Components/Footer'
import Hero from '../Components/Hero'

function home() {
  return (
    <div className='w-full h-screen' >
        <div>
          <Hero/>
          <Agency/>
          <FeedBack/>
          <Footer/>
        </div>
    </div>
  )
}

export default home