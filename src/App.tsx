import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/Navbar'
import { useDarkMode } from './context/context'
import Hero from './Components/Hero'
import { Footer } from './Components/Footer'
import FeedBack from './Components/Feedback'
import Agency from './Components/Agency'

function App() {
  const [count, setCount] = useState(0)
  const { darkMode ,setDarkMode } = useDarkMode();
  return (
    <div className={`h-screen w-full flex flex-col text-white ${darkMode === true? 'bg-zinc-800 ' :'bg-gray-200'}`}>
         <div className='z-10' > <Navbar /></div>
        <div>
          <Hero/>
          <Agency/>
          <FeedBack/>
          <Footer/>
        </div>
    </div>
  )
}

export default App
