import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'

// images
import project1 from '../images/ipyothin.png'
import project2 from '../images/Screenshot 2023-12-08-142000.png'
import project3 from '../images/personal-portfolio.png'
import project4 from '../images/soccer-robot.png'
import project5 from '../images/vibin.png'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        Axios.get('https://p-database.kasitphoom.com/projects')
        .then(res => {
            setProjects(res.data)
            console.log(projects)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
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
    // getProjects()
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
            <div className="
                flex flex-col gap-10 items-center
                md:p-10
                lg:flex-row lg:px-40 lg:justify-between
            ">
                <div className="
                    bg-primaryDark dark:bg-white rounded-md p-2 h-fit
                    lg:max-w-[50%] 
                ">
                    <img src={project4} alt="" className='rounded-md h-auto w-full object-cover'/>
                </div>
                <div className="project-info flex flex-col gap-8 lg:max-w-[50%]">
                    <div className="project-name flex gap-2 justify-between text-line dark:text-white">
                        <h3 className='font-bold text-lg text-line dark:text-white'>Soccer Robot Omniwheels Simulation</h3>
                        <FontAwesomeIcon icon="fa-solid fa-caret-down" className='text-white dark:text-primaryDark bg-primaryDark dark:bg-white p-2  flex justify-center items-center rounded-lg lg:hidden' onClick={ToggleProjectHandle}/>
                    </div>
                    <div className='project-desc flex flex-col gap-8 overflow-hidden animate-none transition-all duration-300 max-h-0 lg:max-h-[9999px]'>
                        <div className='flex flex-row flex-wrap gap-3 text-white'>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                Python
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                Tkinter
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                GIT
                            </div>
                        </div>
                        <div className="description">
                            <p className='text-textLight dark:text-textDark'>
                                Develop a simulation of soccer robot omniwheels using <span className='font-bold text-line  dark:text-white'>Python and Tkinter</span> to simulate the movement of the robot. This project contains physic calculations and graphic design. Nice user-friendly interface with customs variables for user to change, such as robot PID setting, field friction, and simulation setup.
                            </p>
                        </div>
                        <a href="https://github.com/Kasitphoom/COMPUTER_PROGRAMMING/blob/master/HOMEWORK/FInal%20Proj/final.py" rel="noreferrer" target='_blank' className='w-fit px-4 py-2 bg-line rounded-md text-white hover:bg-white hover:text-line transition-all duration-300'>
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
                    <img src={project5} alt="" className='rounded-md h-auto w-full object-cover'/>
                </div>
                <div className="project-info flex flex-col gap-8 lg:max-w-[50%]">
                    <div className="project-name flex gap-2 justify-between text-line dark:text-white">
                        <h3 className='font-bold text-lg text-line dark:text-white'>Vibin Music Player</h3>
                        <FontAwesomeIcon icon="fa-solid fa-caret-down" className='text-white dark:text-primaryDark bg-primaryDark dark:bg-white p-2  flex justify-center items-center rounded-lg lg:hidden' onClick={ToggleProjectHandle}/>
                    </div>
                    <div className='project-desc flex flex-col gap-8 overflow-hidden animate-none transition-all duration-300 max-h-0 lg:max-h-[9999px]'>
                        <div className='flex flex-row flex-wrap gap-3 text-white'>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                C++
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                Object-Oriented Programming
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                Qt6
                            </div>
                            <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300">
                                GIT
                            </div>
                        </div>
                        <div className="description flex flex-col gap-3">
                            <p className='text-textLight dark:text-textDark'>
                                Using Object-Oriented Programming language <span className='font-bold text-line  dark:text-white'>C++</span> to create a music player application that can play music from your local computer. It is able to upload files into file mode and play music from the file. It also has a playlist mode or folder mode which user can select a folder to play music from.
                            </p>
                            <p className='text-textLight dark:text-textDark'>
                                User has many options to interact with the application, such as <span className='font-bold text-line  dark:text-white'>play, pause, next, previous, shuffle, repeat, and volume control</span>. The application also has a nice user-friendly interface with a custom music player design. User may choose their setting preference, such as <span className='font-bold text-line  dark:text-white'>theme color, language, and output device.</span>
                            </p>
                        </div>
                        <a href="https://github.com/Kasitphoom/Audio_EQ" rel="noreferrer" target='_blank' className='w-fit px-4 py-2 bg-line rounded-md text-white hover:bg-white hover:text-line transition-all duration-300'>
                            <FontAwesomeIcon icon="fa-brands fa-github"/> &nbsp;
                            View Source Code
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