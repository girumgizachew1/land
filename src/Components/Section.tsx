import React from 'react'
import { useDarkMode } from '../context/context'
import model1 from '../assets/model4.jpg'

function Section() {
  const { darkMode, setDarkMode } = useDarkMode()
  return (
    <div className={`fontmono px-4 py-4 bg-lightblue ${darkMode === true ? 'bg-gray-900 text-gray-300 shadow-lg shadow-zinc-900/50 ' : 'bg-gray-100 text-gray-700 shadow-lg shadow-white/50'} `}>
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="lg:col-start-2 md:pl-20">
          <h4 className="text-lg md:text-2xl font-extrabold leading-8 tracking-tight sm:leading-9">
            Our Service
          </h4>
          <ul className="mt-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-md">
                    <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className=" text-base md:text-lg font-bold leading-6">
                    Onlyfans Account Management
                  </h5>
                  <p className="mt-2 text-sm md:text-base leading-6 text-gray-500 px-10">
                    You will get an account manager who takes care of you 24/7,
                    Onlyfans Chatters,Guides to assist you with content creation
                    ,Fan management (rebill On, win them back,…),PPV + tip sales and upsell management
                    General weekly audits and reporting for Social Media and OnlyFans
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-md">
                    <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-base md:text-lg font-bold leading-6 t">
                    Onlyfans Account Audit
                  </h5>
                  <p className="mt-2 text-sm md:text-base leading-6 text-gray-500 px-10 ">
                    Full review of you whole account performance, earnings, chats and account
                    Audits to understand more where weakness lies and where the potential exists
                    Exact steps to elevate these weaknesses into strengths and raise you revenue significantly with less time invest

                    + Social Media Audits to get the most out of your brand                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-md">
                    <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-base md:text-lg font-bold leading-6 ">
                    Account Growth &amp;  Onlyfans Marketing
                  </h5>
                  <p className="mt-2 text-sm md:text-base leading-6 text-gray-500 px-10">
                    Social media management of existing or new accounts (Instagram, Reddit, Twitter and a lot more)
                    We organise promotions like shoutouts, GGS and a lot more
                    Daily reddit promotion (with our automations we make sure to post there 24/7)
                    We take care of your direct messages on Social Media                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex  filter brightness-85 opacity-90  grayscale relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
          <img src={model1} alt="illustration" className="relative w-auto mx-auto rounded shadow-lg" />
        </div>
      </div>
    </div>

  )
}

export default Section