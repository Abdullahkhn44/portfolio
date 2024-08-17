import React from 'react'
import '../assets/styles/Footer.css'

import emailIcon from '../assets/icons/emailIcon.png'
import linkedinIcon from '../assets/icons/linkedinIcon.png'
import githubIcon from '../assets/icons/githubIcon.png'
import locationIcon from '../assets/icons/locationIcon.png'


function Footer() {
    return (
        <div className='footerMainDiv'>
            <div className='nameDiv'>
                <h2 className='footerName'>Abdullah Khan React Native Developer</h2>

            </div>

            <div className='socialIconDiv'>

                <img className='icons' src={emailIcon} />
                <img className='icons' src={linkedinIcon} />
                <img className='icons' src={githubIcon} />
              

            </div>

            <div className='sectionsDiv'>
                <nav className='navbar'>
                    <ul className='footerUlist'>
                        <li className='items'><a href='#'>Home</a></li>
                        <li className='items'><a href='#'>About</a></li>
                        <li className='items'><a href='#'>Services</a></li>
                        <li className='items'><a href='#'>Work</a></li>
                        <li className='items'><a href='#'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Footer