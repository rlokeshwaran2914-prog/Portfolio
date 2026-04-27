import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import Skills from './components/Skills/Skills'
import MyWork from './components/work/MyWork'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <MyWork/>
      <Contact/>
    </div>
  )
}

export default App