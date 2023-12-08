import React from 'react'

// images
import project1 from '../images/ipyothin.png'
import project2 from '../images/Screenshot 2023-12-08-142000.png'
import project3 from '../images/personal-portfolio.png'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const projects = () => {
    const ToggleProjectHandle = (e) => {
        if (e.target.tagName === 'svg') {
            const parentElem = e.target.parentElement.parentElement
            e.target.classList.toggle('rotate-180')
            
            const ProjectDescription = parentElem.querySelector('.project-desc')
            if(ProjectDescription.classList.contains('max-h-[9999px]')){
                ProjectDescription.classList.remove('max-h-[9999px]')
                ProjectDescription.classList.add('max-h-0')
            }
            else{
                ProjectDescription.classList.remove('max-h-0')
                ProjectDescription.classList.add('max-h-[9999px]')
            }
        }
    }
  return (
    <section className='p-5' id='project'>
        <h1 className='
            text-primaryDark text-2xl text-center font-bold mb-3
            dark:text-white
        '>
            PROJECTS
        </h1>
        <div className="w-24 h-2 bg-line mx-auto rounded-full"></div>
        <div className="flex flex-col mt-16 gap-24">
            <div className="
                flex flex-col gap-6 items-center
                md:p-10
                lg:flex-row lg:px-40 lg:justify-between
            ">
                <div className="
                    bg-primaryDark dark:bg-white rounded-md p-2 h-fit
                    lg:max-w-[50%] 
                ">
                    <img src={project1} alt="" className='rounded-md h-auto w-full object-cover'/>
                </div>
                <div className="project-info flex flex-col gap-8 lg:max-w-[50%]">
                    <div className="project-name flex items-center justify-between gap-2" >
                        <h3 className='font-bold text-lg text-line dark:text-white'>Yothinburana School International Programme Website</h3>
                        <FontAwesomeIcon icon="fa-solid fa-caret-down" className='text-white dark:text-primaryDark bg-primaryDark dark:bg-white p-2  flex justify-center items-center rounded-lg lg:hidden' onClick={ToggleProjectHandle}/>
                    </div>
                    <div className='project-desc flex flex-col gap-8 overflow-hidden animate-none transition-all duration-300 max-h-0 lg:max-h-[9999px]'>
                        <div className='flex flex-row flex-wrap gap-3 text-white'>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                HTML
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                JavaScript
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                CSS
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                PHP
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                MySQL
                            </div>
                        </div>
                        <div className="description">
                            <p className='text-textLight dark:text-textDark'>
                                Develop an user-friendly interface and responsive website for Yothinburana School International Programme that provides information about the school and the programme. Managing file and database Using <span className='font-bold text-line  dark:text-white'>PHP and MySQL</span> to create a backend server and using <span className='font-bold text-line  dark:text-white'>HTML, CSS, JavaScript</span> to create a frontend website. 
                            </p>
                        </div>
                        <a href="https://www.ipyothin.com/" rel="noreferrer" target='_blank' className='w-fit px-4 py-2 bg-line rounded-md text-white hover:bg-white hover:text-line transition-all duration-300'>
                            <FontAwesomeIcon icon="fa-solid fa-globe"/> &nbsp;
                            View Website
                        </a>
                    </div>
                    <hr />
                </div>
                
            </div>
            <div className="
                flex flex-col gap-10 items-center
                md:p-10
                lg:flex-row lg:px-40 lg:justify-between
            ">
                <div className="
                    bg-primaryDark dark:bg-white rounded-md p-2 h-fit
                    lg:max-w-[50%] 
                ">
                    <img src={project2} alt="" className='rounded-md h-auto w-full object-cover'/>
                </div>
                <div className="project-info flex flex-col gap-8 lg:max-w-[50%]">
                    <div className="project-name flex gap-2 text-line dark:text-white">
                        <h3 className='font-bold text-lg text-line dark:text-white'>Software Engineering Online Meeting and Learning Platform</h3>
                        <FontAwesomeIcon icon="fa-solid fa-caret-down" className='text-white dark:text-primaryDark bg-primaryDark dark:bg-white p-2  flex justify-center items-center rounded-lg lg:hidden' onClick={ToggleProjectHandle}/>
                    </div>
                    <div className='project-desc flex flex-col gap-8 overflow-hidden animate-none transition-all duration-300 max-h-0 lg:max-h-[9999px]'>
                        <div className='flex flex-row flex-wrap gap-3 text-white'>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                HTML
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                JavaScript
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                CSS
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                Python
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                FastAPI
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                ZODB
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                GIT
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                Node.js
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                WebSocket
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                WebRTC
                            </div>
                        </div>
                        <div className="description">
                            <p className='text-textLight dark:text-textDark'>
                                An all-in-one online learning platform that allows students to learn and teachers to teach. Using <span className='font-bold text-line  dark:text-white'>Python FastAPI and Python ZODB</span> to create a backend server and using HTML, CSS, JavaScript to create a frontend website. Online meeting platform is created by <span className='font-bold text-line  dark:text-white'>Node.js and Socket.io</span> combine with WebRTC to provide real-time communication.
                            </p>
                        </div>
                        <a href="https://github.com/Kasitphoom/SEWeb/" rel="noreferrer" target='_blank' className='w-fit px-4 py-2 bg-line rounded-md text-white hover:bg-white hover:text-line transition-all duration-300'>
                            <FontAwesomeIcon icon="fa-brands fa-github"/> &nbsp;
                            View Source Code
                        </a>
                    </div>
                    <hr />
                </div>
                
            </div>
            <div className="
                flex flex-col gap-10 items-center
                md:p-10
                lg:flex-row lg:px-40 lg:justify-between
            ">
                <div className="
                    bg-primaryDark dark:bg-white rounded-md p-2 h-fit
                    lg:max-w-[50%] 
                ">
                    <img src={project3} alt="" className='rounded-md h-auto w-full object-cover'/>
                </div>
                <div className="project-info flex flex-col gap-8 lg:max-w-[50%]">
                    <div className="project-name flex gap-2 justify-between text-line dark:text-white">
                        <h3 className='font-bold text-lg text-line dark:text-white'>Personal Portfolio</h3>
                        <FontAwesomeIcon icon="fa-solid fa-caret-down" className='text-white dark:text-primaryDark bg-primaryDark dark:bg-white p-2  flex justify-center items-center rounded-lg lg:hidden' onClick={ToggleProjectHandle}/>
                    </div>
                    <div className='project-desc flex flex-col gap-8 overflow-hidden animate-none transition-all duration-300 max-h-0 lg:max-h-[9999px]'>
                        <div className='flex flex-row flex-wrap gap-3 text-white'>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                HTML
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                JavaScript
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                Tailwind CSS
                            </div>
                            
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                GIT
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                React.js
                            </div>
                        </div>
                        <div className="description">
                            <p className='text-textLight dark:text-textDark'>
                                A personal portfolio of Kasitphoom Thowongs that provides information about myself and my projects. Using <span className='font-bold text-line  dark:text-white'>React.js</span> to create a frontend website and using <span className='font-bold text-line  dark:text-white'>TailwindCSS</span> to design the website. This project is under development and looking forward to implement SQL database to store data.
                            </p>
                        </div>
                        <a href="/" rel="noreferrer" target='_blank' className='w-fit px-4 py-2 bg-line rounded-md text-white hover:bg-white hover:text-line transition-all duration-300'>
                            <FontAwesomeIcon icon="fa-solid fa-globe"/> &nbsp;
                            View Website
                        </a>
                    </div>
                    <hr />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default projects