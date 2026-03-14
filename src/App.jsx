import React from 'react'
import Hero from './sections/Hero'
import { DotGrid } from './components/Bg-Grid'
import Works from './components/Works'

const App = () => {
  return (
    <>
    <DotGrid />
      <div className="relative z-10">
        <Hero />
        <Works />
      </div>
    </>
  )
}

export default App