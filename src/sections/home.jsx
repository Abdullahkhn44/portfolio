import React from 'react'
import Header from '../components/header'
import bannerimage from '../assets/images/blur.webp'
import '../assets/styles/home.css'
import back1 from '../assets/images/back3.png'
import cv from '../assets/images/cv.png'
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import resume from '../assets/Resume Abdullah Khan.pdf'


export default function Home() {
    return (
        <div id="home">
            <Header />
            <div className='banner'>
                <img className='banner-image' src={bannerimage} alt='banner - image' />

                <div className='main'>

                    <div className='mainText'>
                        <p className='hi'>Hi, i am</p>
                        <h1 className='name'>Abdullah Khan</h1>
                        <h1 className='dev'>React Native</h1> <h1 className='developer'>Developer</h1>
                    </div>
                    <div className='mainProfile'>
                        <img className='profileImage' src={back1} alt='banner - image' />
                    </div>

                </div>
                <div className='buttonDiv'>
                    <a href={resume} download={'mycv'} target="_blank" className='button'> <img className='cv' src={cv} alt='banner - image' /></a>
                    <a href='https://www.linkedin.com/in/abdullah-react-native/' target="_blank" className='button'><img className='images' src={linkedin} alt='banner - image' /></a>
                    <a href='https://github.com/Abdullahkhn44' target="_blank" className='button'><img className='images' src={github} alt='banner - image' /></a>
                </div>
            </div>


        </div>

    )
}
