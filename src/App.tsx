
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Experiments from './pages/Experiments'
import Contact from './pages/Contact'


function App() {
  const [activePage, setActivePage] = useState('home')

  return (
    <>
      {activePage === 'home' && (
        <Home onNavigate={setActivePage} />
      )}

      {activePage === 'about' && (
  <About onNavigate={setActivePage} />
)}

      {activePage === 'resume' && (
  <Resume onNavigate={setActivePage} />
)}

      {activePage === 'portfolio' && (
  <Portfolio onNavigate={setActivePage} />
)}

      {activePage === 'experiments' && (
  <Experiments onNavigate={setActivePage} />
)}

     {activePage === 'contact' && (
  <Contact onNavigate={setActivePage} />
)} 
    </>
  )
}

export default App

