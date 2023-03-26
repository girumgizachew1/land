import React, { useState } from 'react'
import { useDarkMode } from '../context/context';

function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };


  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  }

  return (
    <div className={`h-20 flex justify-between px-5 md:px-20 py-5  ${darkMode === true? 'bg-zinc-800 shadow-lg shadow-zinc-900/50 ' :'bg-zinc-100 shadow-lg shadow-white/50'}`}>
      <div className='logo w-64 h-64 -mt-16'>
        {darkMode
          ? <img src='./joshco1.png' alt='Dark logo' />
          : <img src='./joshco2.png' alt='Light logo' />
        }
      </div>
      <div className='menus flex space-x-5 items-center ' >
        <div
          className='hidden md:block relative inline-block w-10 h-6 py-1 px-1  rounded-full overflow-hidden bg-blue-600 dark:bg-blue-600 cursor-pointer'
          onClick={handleDarkModeToggle}
        >
          <div
            className={`absolute w-4 h-4 bg-gray-700 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${darkMode ? 'translate-x-4' : ''
              }`}
          >
          </div>

        </div>
        <div className="hidden md:block">
          <button className='bg-blue-600 px-4 py-1 rounded-lg text-sm ' >I'm Photographer</button>
        </div>
        <div className="hidden md:block">
          <button className='bg-blue-600 px-4 py-1 rounded-lg text-sm '  >I'm Partner</button>
        </div>
        <div className="block md:hidden">
          <button className=' px-4 py-1 rounded-lg text-sm ' onClick={handleMenuToggle}>
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75 3.75H20.25V5.25H3.75V3.75ZM3.75 9.75H20.25V11.25H3.75V9.75ZM20.25 18.75H3.75V17.25H20.25V18.75Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.5 6.75H19.5V8.25H4.5V6.75ZM4.5 11.25H19.5V12.75H4.5V11.25ZM4.5 15.75H19.5V17.25H4.5V15.75Z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu component */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 bg-gray-900 bg-opacity-25 transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={handleMenuToggle}
      >
        <div className={`block md:hidden fixed top-0 left-0 w-3/4 h-full z-50 bg-zinc-900 shadow-md transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <div className="flex flex-col justify-between py-10 h-full px-4">
            <div className='flex flex-col ' >
              <button className='py-2 bg-white px-4 my-2 rounded-lg text-sm text-black' onClick={handleMenuItemClick}>
                I'm Photographer
              </button>
              <button className='py-2 bg-white px-4 my-2 rounded-lg text-sm text-black ' onClick={handleMenuItemClick}>
                I'm Partner
              </button>
            </div>
            <div className='flex justify-between' >
              <div
                className='relative inline-block w-10 h-6 py-1 px-1  rounded-full overflow-hidden bg-blue-600 dark:bg-blue-600 cursor-pointer'
                onClick={handleDarkModeToggle}
              >
                <div
                  className={`absolute w-4 h-4 bg-gray-700 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${darkMode ? 'translate-x-4' : ''
                    }`}
                >
                </div>

              </div>
              <div>
                <img src='./flag.png' className='w-9 h-6 object-contain ' style={{ zIndex: -1 }} alt='flag' />

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export { Navbar }
