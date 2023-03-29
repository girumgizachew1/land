import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ModeContextProvider } from './context/context'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModeContextProvider>
      <Router>
        <App />
      </Router>
    </ModeContextProvider>
  </React.StrictMode>,
)
