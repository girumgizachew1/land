import React from 'react';
import { useDarkMode } from '../context/context';

const Footer = () => {
  const { darkMode } = useDarkMode()
  return (
    <footer className={` ${darkMode === true ? 'bg-gray-900 text-gray-200 ' : 'bg-gray-200 text-gray-900'}`}>
      <div className='h-56 w-full  flex items-center justify-center '>
       <div className='flex flex-col' >
        {darkMode
          ? <img src='./joshco1.png' className='h-72 w-96' alt='Dark logo' />
          : <img src='./joshco2.png' className='h-72 w-96' alt='Light logo' />
        }        <div className="flex space-x-4">
         <div className='flex flex-row space-x-4 -mt-28 mx-auto fontmono' > 
          <a href="#" className="">
            About Us
          </a>
          <a href="#" className="">
            Contact Us
          </a>
          <a href="#" className="">
            Privacy Policy
          </a>
          </div>
          </div>
        </div>
      </div>
      <div className={`w-full h-12 ${darkMode === true ? 'bg-gray-100 text-gray-900':'bg-gray-900 text-gray-100'} flex items-center justify-center`}>
        <p className="fontmono"  >&copy; 2023 My Company, Inc.</p>
      </div>

    </footer>
  );
};

export { Footer };
