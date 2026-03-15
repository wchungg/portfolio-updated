import React from 'react'
import Hero from './sections/Hero'
import { DotGrid } from './components/Bg-Grid'
import Works from './components/Works'
import LogoSection from './sections/LogoSection'
import AboutGrid from './components/AboutGrid'
import ExperienceSection from './sections/ExperienceSection'
import SkillsSection from './sections/SkillsSection'
import Footer from './sections/Footer'
import NavBar from './sections/NavBar'
import Contact from './sections/Contact'
import CustomerCursor from './components/CustomerCursor'

const App = () => {
  return (
    <>
      <DotGrid />
      <CustomerCursor />
      <NavBar />
      <Hero />
      <AboutGrid />
      <Works />
      {/* <LogoSection /> */}
      <ExperienceSection />
      <SkillsSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App

// Loading screen
// custom cursor
// contact 
// mobile nav
// light / dark mode
// update photos, title + favicon
