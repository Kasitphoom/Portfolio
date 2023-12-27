import React from 'react'

// images
import Profile from '../../../images/20230603_115941.jpg'

const about = () => {
    return (
        <section className='mt-24 p-5' id='about'>
            <h1 className='
            text-primaryDark text-4xl text-center font-bold mb-3
            dark:text-white
            '>
                ABOUT ME
            </h1>
            <div className="w-24 h-2 bg-line mx-auto rounded-full"></div>
            <div className="
            grid grid-cols-1 gap-10 py-20 text-textLight dark:text-textDark
            md:px-10
            lg:flex-row lg:px-20 lg:justify-between lg:gap-20 lg:grid-cols-2
            xl:px-40
            ">
                <div className='
                    flex flex-col gap-10
                '>
                    <h3 className='font-bold text-xl'>
                        Who is <br />
                        <span className='text-primaryDark dark:text-white'>Kasitphoom Thowongs?</span>
                    </h3>

                    <div className='flex justify-center relative h-80 '>
                        <img src={Profile} alt="" className='absolute h-full w-full object-cover blur-2xl md:w-1/2' />
                        <img src={Profile} alt="" className='absolute h-full w-full object-cover md:w-1/2' />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <p>
                        I am a Software Engineering student at KMITL, having a solid foundation on <span className='font-bold text-line dark:text-white'>full-stack Web Application</span>. Project section can illustrate my skills and experience.
                        </p>
                        <p>
                        I am a fast learner and always eager to learn new things. I am also a team player and can work well with others. Having a very high passion for <span className='font-bold text-line dark:text-white'>complex problem solving</span> without discouraged by failure.
                        </p>
                        <p>
                        I am looking for an internship position to gain more experience and improve my skills.
                        </p>
                    </div>

                    
                </div>
                <div className='flex flex-col gap-10'>
                    <h3 className='font-bold text-xl'>
                        What are <br />
                        <span className='text-primaryDark dark:text-white'>My skills?</span>
                    </h3>

                    <div className='flex flex-row flex-wrap gap-3 text-white'>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            HTML
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            JavaScript
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            CSS
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            TailWind CSS
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            React.js
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            PHP
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            SQL
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            C
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            C++
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            Rust
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            Python
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            GIT
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            Arm Assembly
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            Node.js
                        </div>
                        <div className="rounded-full bg-line dark:bg-lightBgDark px-5 py-2 shadow-md shadow-shadow hover:bg-lightBgDark dark:hover:bg-line transition-all duration-300">
                            AWS
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about