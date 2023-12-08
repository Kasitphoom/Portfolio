import { useState } from 'react'
import HomePage from './pages/home'

// components
import Nav from './components/Nav'

// images
import mainSVG from './images/main.svg'


function App() {

  return (
    <>
      <Nav />
      <div className='spacer h-24'></div>
      <div className="absolute">
        <img src={mainSVG} alt="" className='w-screen h-auto min-h-screen object-cover'/>
      </div>
      <HomePage />
    </>
  )

}

export default App
