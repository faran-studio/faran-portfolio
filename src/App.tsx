
import { useState } from 'react'
import './App.css'
import PortfolioShell from './components/layout/PortfolioShell'

import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Experiments from './pages/Experiments'
import Contact from './pages/Contact'

function App() {
  const [activePage, setActivePage] = useState('home')

  return (
    <PortfolioShell onNavigate={setActivePage}>
      {activePage === 'home' && <Home />}

      {activePage === 'about' && <About />}

      {activePage === 'resume' && <Resume />}

      {activePage === 'portfolio' && <Portfolio />}

      {activePage === 'experiments' && <Experiments />}

      {activePage === 'contact' && <Contact />}
    </PortfolioShell>
  )
}

export default App
