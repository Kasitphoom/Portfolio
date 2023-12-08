import React from 'react'

// images
import Profile from '../../../images/20230603_115941.jpg'

const about = () => {
  return (
    <section className='mt-12 p-5' id='about'>
        <h1 className='
            text-primaryDark text-2xl text-center font-bold mb-3
            dark:text-white
        '>
            ABOUT ME
        </h1>
        <div className="w-24 h-2 bg-line mx-auto rounded-full"></div>
        <div className="
            flex flex-col gap-20 py-20 text-textLight dark:text-textDark
            md:gap-10 md:px-10
            lg:flex-row lg:px-20 lg:justify-between
            xl:px-40
        ">
            <div className='flex flex-col gap-10 mt-12'>
                <h3 className='font-bold text-xl'>
                    Who is <br />
                    <span className='text-primaryDark dark:text-white'>Kasitphoom Thowongs?</span>
                </h3>

                <div className='flex justify-center relative h-80 '>
                    <img src={Profile} alt="" className='absolute h-full w-full object-cover blur-2xl md:w-1/2'/>
                    <img src={Profile} alt="" className='absolute h-full w-full object-cover md:w-1/2'/>
                </div>

                <p className=''>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates porro, provident illum aspernatur consectetur laudantium quidem dolor odio similique error officiis sunt sapiente praesentium assumenda voluptate aut harum eaque tenetur veritatis? Libero tempore labore suscipit deleniti asperiores eum id ex necessitatibus itaque odio quasi, dicta aspernatur inventore in veritatis! Inventore.
                </p>
            </div>
            <div className='flex flex-col gap-10'>
                <h3 className='font-bold text-xl'>
                    What are <br />
                    <span className='text-primaryDark dark:text-white'>My skills?</span>
                </h3>

                <div className='flex flex-row flex-wrap gap-3 text-white'>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        HTML
                    </div>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        JavaScript
                    </div>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        CSS
                    </div>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        TailWind CSS
                    </div>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        React.js
                    </div>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        PHP
                    </div>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        SQL
                    </div>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        C
                    </div>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        C++
                    </div>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        Rust
                    </div>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        Python
                    </div>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        GIT
                    </div>
                    <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-line transition-all duration-300">
                        Arm Assembly
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default about