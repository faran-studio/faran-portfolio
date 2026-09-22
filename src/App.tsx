
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

  const handleNavigate = (page: string) => {
    if (page === activePage) return

    setActivePage(page)
  }

  const renderPage = () => {
    if (activePage === 'home') return <Home />
    if (activePage === 'about') return <About />
    if (activePage === 'resume') return <Resume />
    if (activePage === 'portfolio') return <Portfolio />
    if (activePage === 'experiments') return <Experiments />
    if (activePage === 'contact') return <Contact />

    return <Home />
  }

  return (
    <PortfolioShell onNavigate={handleNavigate}>
      <div
        key={activePage}
        className={`page-stage page-motion-${activePage}`}
      >
        {renderPage()}
      </div>
    </PortfolioShell>
  )
}

export default App