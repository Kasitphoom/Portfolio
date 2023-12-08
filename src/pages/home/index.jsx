import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import Welcome from './components/welcome'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'

const HomePage = () => {

    return (
        <>
            <Welcome />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default HomePage