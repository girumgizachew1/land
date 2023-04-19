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
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home'
import About from './Pages/About'
import Ourmodel from './Pages/Ourmodel'
import Contact from './Pages/Contact'
function App() {
  const [count, setCount] = useState(0)
  const { darkMode ,setDarkMode } = useDarkMode();
  return (
    <div className={`h-full w-full flex flex-col text-white ${darkMode === true? 'bg-gray-900 ' :'bg-gray-200'}`}>
         <div className='z-10' > <Navbar /></div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/ourmodel" element={<Ourmodel />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div><Footer/></div>
    </div>
  )
}

export default App
