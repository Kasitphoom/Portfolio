import React from 'react'

// components


// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Welcome = () => {
  return (
    <section className='relative'>
        
        <div className="h-[calc(100vh-6rem)] w-full flex flex-col justify-between px-4">
            <div className="flex flex-col gap-12 justify-center items-center grow">
                <h1 className="text-4xl font-bold text-white text-center">
                    HELLO I'M KASITPHOOM THOWONGS
                </h1>
                <p className='text-white w-full text-center'>
                    Software Engineer student with fast learning and good teamwork skills.  Having a solid foundation in Web development (Full-stack)
                </p>
                    <a href="" className='bg-accent py-4 px-8 rounded-md'>DOWNLOAD CV</a>
            </div>
            <div className='flex justify-center'>
                <div className="bg-white w-auto flex items-center gap-5 px-4 py-3 text-2xl rounded-t-md text-line">
                    <a href=""><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                    <a href=""><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                    <a href=""><FontAwesomeIcon icon="fa-brands fa-square-instagram" /></a>
                    <a href=""><FontAwesomeIcon icon="fa-brands fa-square-facebook" /></a>
                    <a href=""><FontAwesomeIcon icon="fa-brands fa-line" /></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Welcome