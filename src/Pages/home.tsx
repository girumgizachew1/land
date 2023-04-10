import React from 'react'
import Slider from 'react-slick'
import Agency from '../Components/Agency'
import Calanderly from '../Components/Calanderly'
import FeedBack from '../Components/Feedback'
import { Footer } from '../Components/Footer'
import Hero from '../Components/Hero'
import Section from '../Components/Section'
import { useDarkMode } from '../context/context'

function home() {
  const { darkMode } = useDarkMode()
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className='w-full h-full'>
      <div>
        <Hero />
        <Section/>
        <Agency />
        <FeedBack />
        
      </div>
    </div>
  );
}


export default home