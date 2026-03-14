import React from 'react'
import Hero from './sections/Hero'
import { DotGrid } from './components/Bg-Grid'
import Works from './components/Works'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <DotGrid />
      <NavBar />
      <Hero />
      <Works />
    </>
  )
}

export default App