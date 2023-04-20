import React from 'react'
import Slider from 'react-slick'
import FeedBackCard from './Cards/Feedbackcard'
import FeedBackCard1 from './Cards/Feedbackcard1'
import FeedBackCard2 from './Cards/Feedbackcard2'
import FeedBackCard3 from './Cards/Feedbackcard3'
import FeedBackCard4 from './Cards/Feedbackcard4'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDarkMode } from '../context/context';
const FeedBack = () => {
    const {darkMode} = useDarkMode();
    var settings = {
        dots:true,
        infinite:false,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        responsive:[
        {
            breakpoint:1024,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite:false,
                dots:true
            }
        },
        {
            breakpoint:600,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
                infinite:false,
                dots:true
            }
        },
        {
            breakpoint:400,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
                infinite:false,
                dots:true
            }
        },
        ]
    }
  return (
    <section className={`fontmono w-full py-24 p-4  ${darkMode === true ? 'bg-gray-800 shadow-lg shadow-gray-900/50 text-gray-200' : 'bg-gray-200 text-gray-800 shadow-lg shadow-white/50'}`}>
        <div className='md:max-w-[1400px] m-auto max-w-[400px] mx-auto'>
        <h1 className='py-4 text-xl md:text-3xl font-bold'>Our Models <span className='text-[#20B486]'>Success Stories </span></h1>
            <p className='text-[#6D737A] py-2'>The Testimonials were published with the consent of models</p>
            <Slider {...settings}>
                <FeedBackCard/>
                <FeedBackCard1/>
                <FeedBackCard2/>
                <FeedBackCard3/>
                <FeedBackCard4/>
            </Slider>
        </div>
    </section>    
  )
}

export default FeedBack