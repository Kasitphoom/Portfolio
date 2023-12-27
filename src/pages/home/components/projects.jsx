import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { useCountdown } from '../../../useCountdown'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const projects = () => {
    const [projects, setProjects] = useState([])
    const { secondsLeft, startCountdown } = useCountdown();
    
    const fetchProject = () => {
        Axios.get('https://p-database.kasitphoom.com/projects')
        .then(res => {
            setProjects(res.data.results)
        })
        .catch(err => {
            console.log(err)
            startCountdown(5);
        })
    }
    
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

    useEffect(() => {
        fetchProject()
    }, [])

    useEffect(() => {
        const retry = document.getElementById('retry')
        retry.innerHTML = secondsLeft
        if (secondsLeft == 0) {
            fetchProject()
        }
    }, [secondsLeft])
  return (
    <section className='p-5' id='project'>
        <h1 className='
            text-primaryDark text-4xl text-center font-bold mb-3
            dark:text-white
        '>
            PROJECTS
        </h1>
        <div className="w-24 h-2 bg-line mx-auto rounded-full"></div>
        <div className="flex flex-col mt-16 gap-24">
        {
            projects.length == 0 && setTimeout(() => {
                reloadProject()
            }
            , 1000) &&
            <div className='flex justify-center items-center gap-4'>
                <svg aria-hidden="true" className="w-10 h-10 animate-spin text-darkWhite dark:text-white fill-blue-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <p className='text-line dark:text-white'>Loading Projects...</p>
                <p className='text-line dark:text-white'>Retry in <span id='retry'></span></p>
            </div>
        }
        {
            projects.length > 0 &&
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