import { useState } from 'react'
import HomePage from './pages/home'

// components
import Nav from './components/Nav'

// images
import mainSVG from './images/main.svg'


function App() {

  return (
    <div className="h-auto bg-white dark:bg-primaryDark font-sora">
      <Nav />
      <div className='spacer h-24'></div>
      <div className="absolute">
        <img src={mainSVG} alt="" className='w-screen h-auto min-h-screen object-cover'/>
      </div>
      <HomePage />
    </div>
  )

}

export default App
