import React from 'react'
import Header from '../components/header'
import bannerimage from '../assets/images/neon.jpg'
import '../assets/styles/home.css'
import profile from '../assets/images/9.png'

export default function Home() {
    return (
        <div>
            <Header />
            <div className='banner'>
                <img className='banner-image' src={bannerimage} alt='banner - image' />
                
                <div className='main'>

                    <div className='mainText'>
                        <p className='hi'>Hi,i am</p>
                        <h1 className='name'>Abdullah Khan</h1>
                        <h1 className='dev'>React Native</h1> <h1 className='developer'>Developer</h1>
                    </div>
                    <div className='mainProfile'>
                        <img className='profileImage' src={profile} alt='banner - image' />
                    </div>
                </div>
            </div>


        </div>

    )
}
