import React from 'react';
import { useDarkMode } from '../context/context';

const Footer = () => {
  const {darkMode} = useDarkMode()
  return (
    <footer className={` py-4  ${darkMode === true ? 'bg-gray-900 text-zinc-200 ' : 'bg-gray-100 text-zinc-900'}`}>
      <div className="container mx-auto flex justify-between">
        <p className="">© 2023 My Company, Inc.</p>
        <div className="flex space-x-4">
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
    </footer>
  );
};

export {Footer};
