import React from 'react'
import '../assets/styles/Contact.css'
import emailIcon from '../assets/icons/emailIcon.png'
import linkedinIcon from '../assets/icons/linkedinIcon.png'
import githubIcon from '../assets/icons/githubIcon.png'
import locationIcon from '../assets/icons/locationIcon.png'

const Contact = () => {
    return (
        <div className='contactMainDiv'  id="Contact">
            <div className='contactTitleDiv'>
                <h1 className='contactText'>Contact</h1>
            </div>

            <div className='contactContainer'>

                <div className='containerSections'>

                    <div className='containerTitleDiv'>
                        <h1 className='contactContainerTitle'>Contacts</h1>
                    </div>

                    <div className='contactSection'>
                        <div className='iconDiv'>
                            <img className='icons' src={emailIcon} />
                            <img className='icons' src={linkedinIcon} />
                            <img className='icons' src={githubIcon} />
                            <img className='icons' src={locationIcon} />
                        </div>
                        <div className='sectionText'>
                            <h1 className='iconText'>abdul148.eagle@gmail.com</h1>
                            <h1 className='iconText'>My Linkedin Profile</h1>
                            <h1 className='iconText'>My Github Profile</h1>
                            <h1 className='iconText'>Pakistan</h1>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact