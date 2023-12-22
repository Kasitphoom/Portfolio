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
            setProjects(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    useEffect(() => {
        console.log(projects)
    }, [projects])
    
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
        {
            projects.map((project, index) => {
                return (
                    <div className="
                        flex flex-col gap-10 items-center
                        md:p-10
                        lg:flex-row lg:px-40 lg:justify-between
                    " key={index}>
                        <div className="
                            bg-primaryDark dark:bg-white rounded-md p-2 h-fit
                            lg:max-w-[50%] 
                        ">
                            <img src={project.image} alt="" className='rounded-md h-auto w-full object-cover'/>
                        </div>
                        <div className="project-info flex flex-col gap-8 lg:max-w-[50%]">
                            <div className="project-name flex items-center justify-between gap-2" >
                                <h3 className='font-bold text-lg text-line dark:text-white'>{project.name}</h3>
                                <FontAwesomeIcon icon="fa-solid fa-caret-down" className='text-white dark:text-primaryDark bg-primaryDark dark:bg-white p-2  flex justify-center items-center rounded-lg lg:hidden' onClick={ToggleProjectHandle}/>
                            </div>
                            <div className='project-desc flex flex-col gap-8 overflow-hidden animate-none transition-all duration-300 max-h-0 lg:max-h-[9999px]'>
                                <div className='flex flex-row flex-wrap gap-3 text-white'>
                                    {
                                        project.tags.split(',').map((tag, index) => {
                                            return (
                                                <div className="rounded-lg bg-lightBgDark px-4 py-1 hover:bg-line transition-all duration-300" key={index}>
                                                    {tag}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="description">
                                    <p className='text-textLight dark:text-textDark'>
                                        {project.description}
                                    </p>
                                </div>
                                
                                <a href={project.link} rel="noreferrer" target='_blank' className='w-fit px-4 py-2 bg-line rounded-md text-white hover:bg-white hover:text-line transition-all duration-300'>
                                    {
                                        project.linktype == 'github' ? <FontAwesomeIcon icon="fa-brands fa-github"/> : <FontAwesomeIcon icon="fa-solid fa-globe"/>
                                    }
                                    &nbsp;
                                    {
                                        project.linktype == 'github' ? 'View Source Code' : 'View Website'
                                    }
                                </a>
                            </div>
                            <hr />
                        </div>
                        
                    </div>
                )
            })
                
        }   
        </div>
    </section>
  )
}

export default projects