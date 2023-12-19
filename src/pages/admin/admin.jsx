import React from 'react'

// components
import Nav from '../../components/Nav'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Admin = () => {
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
                            <button className='bg-line text-white px-4 py-2 rounded-md'>
                                <FontAwesomeIcon icon={['fas', 'caret-down']} />
                            </button>
                        </div>
                        
                        <hr />
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Admin