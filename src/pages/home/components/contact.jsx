import React from 'react'
import emailjs from 'emailjs-com'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const contact = () => {
    const sentEmail = (e) => {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_e41cpiq', 'template_nj8clm9', e.target, 'vPHGMm5Nm7WHj4axw')
            .then((result) => {
                alert('Your message has been sent successfully!')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <section id="contact" className='mt-10'>
            <h1 className='
            text-primaryDark text-2xl text-center font-bold mb-3
            dark:text-white
        '>
                CONTACT
            </h1>
            <div className="w-24 h-2 bg-line mx-auto rounded-full"></div>
            <div className="
            flex flex-col gap-3 mt-10
            lg:flex-row
        ">
                <form className="
                flex flex-col p-4 gap-5 bg-lightBgDark rounded-t-md w-full
                lg:rounded-l-2xl lg:rounded-t-none lg:px-14
            " onSubmit={sentEmail}>
                    <div className="form-section flex flex-col gap-3">
                        <p className='text-bold text-white text-lg'>Name <span className='text-red-500'>*</span></p>
                        <div className="
                        name-input flex flex-col gap-2 text-white
                        lg:flex-row
                    ">
                            <div className="firstName flex flex-col w-full">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" id='firstName' name='firstName' className='bg-darkWhite outline-none border-none rounded-sm p-1 text-primaryDark' placeholder='John' required />
                            </div>
                            <div className="lastName flex flex-col w-full">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" id='lastName' name='lastName' className='bg-darkWhite outline-none border-none rounded-sm p-1 text-primaryDark' placeholder='Doe' required />
                            </div>
                        </div>
                    </div>
                    <div className="form-section flex flex-col gap-3">
                        <label htmlFor='email' className='text-bold text-white text-lg'>Email <span className='text-red-500'>*</span></label>
                        <input type="email" id='email' name='email' className='bg-darkWhite outline-none border-none rounded-sm p-1 text-primaryDark' placeholder='example@email.com' required />
                    </div>
                    <div className="form-section flex flex-col gap-3">
                        <label htmlFor='organization' className='text-bold text-white text-lg'>Organization</label>
                        <input type="text" id='organization' name="organization" className='bg-darkWhite outline-none border-none rounded-sm p-1 text-primaryDark' placeholder='Organization Co., Ltd.' />
                    </div>
                    <div className="form-section flex flex-col gap-3">
                        <label htmlFor='subject' className='text-bold text-white text-lg'>Subject <span className='text-red-500'>*</span></label>
                        <input type="text" id='subject' name='subject' className='bg-darkWhite outline-none border-none rounded-sm p-1 text-primaryDark' placeholder='Job recruit' required />
                    </div>
                    <div className="form-section flex flex-col gap-3">
                        <label htmlFor='message' className='text-bold text-white text-lg'>Message <span className='text-red-500'>*</span></label>
                        <textarea id='message' name="message" rows="8" className='bg-darkWhite outline-none border-none rounded-sm p-1 text-primaryDark' placeholder='Your message' required />
                    </div>
                    <div className="
                    form-section flex gap-3 justify-end
                ">
                        <button className='
                        bg-accent py-2 px-4 rounded-md text-white font-bold
                    '>
                            SEND
                        </button>
                    </div>
                </form>
                <div className="
                flex flex-col justify-center items-center text-white text-lg bg-lightBgDark rounded-b-md p-14
                lg:rounded-b-none lg:rounded-r-2xl
            ">
                    <div className="flex flex-col gap-3">
                        <p className='flex gap-2 items-center'><FontAwesomeIcon icon="fa-brands fa-github" /><a href="http://github.com/Kasitphoom" target="_blank" rel="noopener noreferrer">Kasitphoom</a></p>
                        <p className='flex gap-2 items-center'><FontAwesomeIcon icon="fa-brands fa-linkedin" /><a href="https://www.linkedin.com/in/kasitphoom/" target="_blank" rel="noopener noreferrer">Kasitphoom</a></p>
                        <p className='flex gap-2 items-center'><FontAwesomeIcon icon="fa-solid fa-phone" />+66 89 616 8448</p>
                        <p className='flex gap-2 items-center'><FontAwesomeIcon icon="fa-solid fa-envelope" />kasitphoom47@gmail.com</p>
                        <p className='flex gap-2 items-center'><FontAwesomeIcon icon="fa-brands fa-square-instagram" /><a href="https://www.instagram.com/kasitphoom/" target="_blank" rel="noopener noreferrer">Kasitphoom</a></p>
                        <p className='flex gap-2 items-center'><FontAwesomeIcon icon="fa-brands fa-square-facebook" /><a href="https://www.facebook.com/phoom.krub.10/" target="_blank" rel="noopener noreferrer">Kasitphoom</a></p>
                        <p className='flex gap-2 items-center'><FontAwesomeIcon icon="fa-brands fa-line" />0896168448 or <a href="https://line.me/ti/p/~phoomykitty" target='_blank' rel="noreferrer" className='bg-green-400 p-1 rounded-sm text-sm'><FontAwesomeIcon icon="fa-brands fa-line" /> CLICK</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contact