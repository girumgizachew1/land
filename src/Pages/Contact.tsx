import React from 'react';
import { useDarkMode } from '../context/context';
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
function ContactForm() {
  const { darkMode } = useDarkMode()
  return (
    <div className={`fontmono h-screen w-full  ${darkMode === true ? 'bg-gray-800 text-gray-200 shadow-lg shadow-zinc-900/50 ' : 'bg-gray-100 text-gray-800 shadow-lg shadow-white/50'}`}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-24 ' >
        <div className='' >
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto bg-white shadow-md rounded-md overflow-hidden">
              <div className="px-6 py-5">
                <h2 className="text-2xl text-center font-bold">
                  Contact Us
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  We'd love to hear from you! Please fill out the form below
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              <form className="px-6 py-4">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700  mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="border rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    required
                    className="border rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700  mb-2"
                  >
                    Instagram Username
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    required
                    className="border rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="border rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

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
            <p className="text-center text-sm py-6 text-gray-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ipsum ac aliquet dignissim, mi diam venenatis arcu, at efficitur mi sapien sed justo.</p>
            <div className="flex items-center justify-center space-x-2">
              <i className="far fa-calendar"></i>
              <Link
                to='https://calendly.com/girumegizachew'
                className="bg-cyan-900 text-white text-base px-4 py-4 mt-4 ">                Book your first meeting with us
              </Link>

            </div>
          </div>


        </div>


      </div>

    </div>
  );
}

export default ContactForm;
