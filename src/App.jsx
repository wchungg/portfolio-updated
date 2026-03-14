import React from 'react'
import Hero from './sections/Hero'
import { DotGrid } from './components/Bg-Grid'

const App = () => {
  return (
    <>
    <DotGrid />
      <div className="relative z-10">
        <Hero />
      </div>
    </>
  )
}

export default App