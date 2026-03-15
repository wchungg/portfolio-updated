import React from 'react'
import Hero from './sections/Hero'
import { DotGrid } from './components/Bg-Grid'
import Works from './components/Works'
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import AboutGrid from './components/AboutGrid'
import ExperienceSection from './sections/ExperienceSection'

const App = () => {
  return (
    <>
      <DotGrid />
      <NavBar />
      <Hero />
      <AboutGrid />
      <Works />
      {/* <LogoSection /> */}
      <ExperienceSection />
    </>
  )
}

export default App