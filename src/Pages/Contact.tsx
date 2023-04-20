import React from 'react';
import { useDarkMode } from '../context/context';
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
function ContactForm() {
  const { darkMode } = useDarkMode()
  
  return (
    <div className={`fontmono w-full  ${darkMode === true ? 'bg-gray-800 text-gray-200 shadow-lg shadow-zinc-900/50 ' : 'bg-gray-300 text-gray-800 shadow-lg shadow-white/50'}`}>
      <div className='grid  py-24 ' >
        <div className='' >
          <div className="flex flex-col items-center justify-between py-4 px-6 mt-32">

            <h1 className="text-lg font-bold">Our Socials</h1>
            <ul className="flex space-x-4">
              <li><a href="#"><i className=""><FaInstagram className='w-20 h-20 hover:text-pink-400' /></i></a></li>
              <li><a href="#"><i className=""><FaTwitter className='w-20 h-20 hover:text-blue-400' /></i></a></li>
              <li><a href="#"><i className=""><FaFacebook className='w-20 h-20 hover:text-blue-600' /></i></a></li>
            </ul>
          </div>
          <div className="py-4 px-6 flex flex-col items-center justify-between">
            <p className="text-center text-sm py-6 text-gray-500 ">
            Unlock your potential and connect with us today – let's make your OnlyFans dreams a reality.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <i className="far fa-calendar"></i>
              <Link
                to='https://calendly.com/joshandco'
                className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-xl text-white text-base px-4 py-4 mt-4 ">                Book your first meeting with us
              </Link>

            </div>
          </div>


        </div>


      </div>

    </div>
  );
}

export default ContactForm;
