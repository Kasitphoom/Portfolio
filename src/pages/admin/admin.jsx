import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'

// components
import Nav from '../../components/Nav'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Admin = () => {
    const [img, setImg] = useState('')
    const handleImageChange = (e) => {
        setImg(URL.createObjectURL(e.target.files[0]))
    }
    const toggleHide = (id) => {
        return () => {
            const el = document.getElementById(id)
            if (el.classList.contains('max-h-0')) {
                el.classList.remove('max-h-0')
                el.classList.add('max-h-[2000px]')
            } else {
                el.classList.remove('max-h-[2000px]')
                el.classList.add('max-h-0')
            }
        }
    }

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

    const [projectSelected, setProjectSelected] = useState(projects[0])
    const handleProjectSelected = (e) => {
        
        const project = projects.find(project => project.name === e.target.value)
        setProjectSelected(project)
    }

    useEffect(() => {
        console.log(projectSelected)
    }, [projectSelected])
    
    return (
        <>
            <Nav />
            <div className='spacer h-24'></div>
            <section className='p-4 flex flex-col gap-5'>
                <h1 className='text-4xl font-bold text-line dark:text-white'>Admin Page</h1>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-2xl font-bold text-line dark:text-white'>
                        Projects
                    </h2>
                    <div className="addsection flex flex-col gap-2">
                        <div className='flex justify-between items-center'>
                            <h3 className='text-xl font-bold text-line dark:text-white'>ADD</h3>
                            <button className='bg-line text-white px-4 py-2 rounded-md' onClick={toggleHide('addForm')}>
                                <FontAwesomeIcon icon={['fas', 'caret-down']} />
                            </button>
                        </div>
                        
                        <hr />
                        
                        <form className="flex flex-col gap-2 text-primaryDark dark:text-darkWhite text-base max-h-0 overflow-hidden transition-all duration-300" id='addForm' method='post' action='https://p-database.kasitphoom.com/add/projects' encType="multipart/form-data" target=''>
                            <label htmlFor="name">TITLE</label>
                            <input type="text" name="name" id="name" className="rounded-sm bg-darkWhite text-primaryDark p-2"/>
                            <label htmlFor="tags">TAGS (Comma Separated)</label>
                            <input type="text" name="tags" id="tags" className="rounded-sm bg-darkWhite text-primaryDark p-2"/>
                            <label htmlFor="description">DESCRIPTION</label>
                            <textarea name="description" id="description" className="rounded-sm bg-darkWhite text-primaryDark p-2"></textarea>
                            <label htmlFor="image">Image</label>
                            <input type="file" name="image" id="image" className="rounded-sm bg-darkWhite text-primaryDark p-2" onChange={handleImageChange}/>
                            <img src={img} alt="" />
                            <label htmlFor="link">LINK</label>
                            <input type="text" name="link" id="link" className="rounded-sm bg-darkWhite text-primaryDark p-2"/>
                            <div className='flex flex-row gap-2'>
                                <input type="radio" name="linkType" value="github" />
                                <label htmlFor="github">GitHub</label>
                                <input type="radio" name="linkType" value="website"/>
                                <label htmlFor="website">Website</label>
                            </div>
                            <button className='bg-line text-white px-4 py-2 rounded-md'>ADD</button>
                        </form>
                    </div>
                    <div className="addsection flex flex-col gap-2">
                        <div className='flex justify-between items-center'>
                            <h3 className='text-xl font-bold text-line dark:text-white'>EDIT</h3>
                            <button className='bg-line text-white px-4 py-2 rounded-md' onClick={toggleHide('editForm')}>
                                <FontAwesomeIcon icon={['fas', 'caret-down']} />
                            </button>
                        </div>
                        
                        <hr />
                        
                        <form className="flex flex-col gap-2 text-primaryDark dark:text-darkWhite text-base max-h-0 overflow-hidden transition-all duration-300" id='editForm' method='post' action='https://p-database.kasitphoom.com/add/projects' encType="multipart/form-data" target=''>
                            <select name="select" id="select" className='text-white p-2 bg-line rounded-md' onChange={handleProjectSelected}>
                                <option value="" selected disabled>Choose project</option>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <option key={project.id} value={project.id}>{project.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <label htmlFor="name">TITLE</label>
                            <input type="text" name="name" id="name" className="rounded-sm bg-darkWhite text-primaryDark p-2" value={projectSelected ? projectSelected['name'] : ""}/>
                            <label htmlFor="tags">TAGS (Comma Separated)</label>
                            <input type="text" name="tags" id="tags" className="rounded-sm bg-darkWhite text-primaryDark p-2" value={projectSelected ? projectSelected['tags'] : ""}/>
                            <label htmlFor="description">DESCRIPTION</label>
                            <textarea name="description" id="description" className="rounded-sm bg-darkWhite text-primaryDark p-2" value={projectSelected ? projectSelected['description'] : ""}></textarea>
                            <label htmlFor="image">Image</label>
                            <input type="file" name="image" id="image" className="rounded-sm bg-darkWhite text-primaryDark p-2" onChange={handleImageChange}/>
                            <img src={img == '' ?  projectSelected ? projectSelected['image'] : img : img} alt="" />
                            <label htmlFor="link">LINK</label>
                            <input type="text" name="link" id="link" className="rounded-sm bg-darkWhite text-primaryDark p-2" value={projectSelected ? projectSelected['link'] : ""}/>
                            <div className='flex flex-row gap-2'>
                                <input type="radio" name="linkType" value="github" checked={projectSelected ? projectSelected['linktype'] == 'github' : false}/>
                                <label htmlFor="github">GitHub</label>
                                <input type="radio" name="linkType" value="website" checked={projectSelected ? projectSelected['linktype'] == 'website' : false}/>
                                <label htmlFor="website">Website</label>
                            </div>
                            <button className='bg-line text-white px-4 py-2 rounded-md'>ADD</button>
                        </form>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Admin