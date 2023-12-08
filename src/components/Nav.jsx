import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// images
import Profile from '../images/20230603_115941.png'

const Nav = () => {
    
    const MenuClickHandle = () => {
        const responsiveClasses = document.querySelector('#responsive-menu').classList
        if(responsiveClasses.contains('left-0')){
            responsiveClasses.remove('left-0')
            responsiveClasses.add('-left-full')
        }
        else{
            responsiveClasses.add('left-0')
            responsiveClasses.remove('-left-full')
        
        }
    }

    const ToogleLightMode = () => {
        document.documentElement.classList.toggle('dark')
        if(localStorage.theme === 'dark'){
            localStorage.theme = 'light'
        }
        else{
            localStorage.theme = 'dark'
        }
    }

  return (
    <nav className='flex justify-between items-center flex-row bg-darkWhite dark:bg-lightBgDark p-4 h-24 dark:text-white text-primaryDark fixed w-full z-10'>
        <div className="nav-title flex gap-4 flex-row items-center">
            <div className="
                profile w-12 h-12 rounded-full bg-line
            ">
                <img src={Profile} alt="" className='rounded-full block w-full h-full object-cover object-center'/>
            </div>
            <p className=' hidden md:block font-bold '>
                KASITPHOOM THOWONGS
            </p>
            <p className=' md:hidden font-bold '>
                KASITPHOOM T.
            </p>
        </div>
        <div className=" flex flex-row gap-12 items-center w-auto md:m-4">

            <div className="
                 w-14 h-7
                md:w-16 md:h-8
            ">
                <div id="themeToggle" className="
                    dark-white  rounded-full bg-accent h-full flex justify-end p-1 transition-all ease-in-out duration-300
                    dark:bg-primaryDark dark:text-white dark:justify-start
                ">
                    <div className="
                        toggle h-5 w-5 rounded-full bg-primaryDark text-white flex justify-center items-center cursor-pointer text-sm
                        md:h-6 md:w-6 md:text-base
                        dark:bg-white dark:text-primaryDark
                    " onClick={ToogleLightMode}>
                        <span className='hidden dark:block'><FontAwesomeIcon icon="fa-solid fa-moon"/></span>
                        <span className='block dark:hidden'><FontAwesomeIcon icon="fa-solid fa-sun"/></span>
                    </div>
                </div>
            </div>

            <div className='
                hidden flex-row gap-12 items-center w-auto font-bold
                md:flex
            '
            >
                <a href="/">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </div>
        <div className="md:hidden text-4xl" onClick={MenuClickHandle}>
            <FontAwesomeIcon icon="fa-solid fa-bars"/>
        </div>
        <div className="h-[calc(100vh-6rem)] bg-darkWhite dark:bg-lightBgDark w-screen absolute z-10 top-24 -left-full transition-all ease-in-out duration-300" id='responsive-menu'>
            <div className='
                flex flex-col gap-12 justify-center items-center h-full text-2xl font-bold
            '
            >
                <a href="/">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav