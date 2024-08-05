import React from 'react'
import Header from '../components/header'
import bannerimage from '../assets/images/six.jpg'
import '../assets/styles/home.css'
import profile from '../assets/images/profile.png'

export default function Home() {
    return (
        <div>
            <Header />
            <div className='banner'>
                <img className='banner-image' src={bannerimage} alt='banner - image' />
                
                <div className='main'>

                    <div className='mainText'>
                        <p>hi</p>
                    </div>
                    <div className='mainProfile'>
                        <img className='profileImage' src={profile} alt='banner - image' />
                    </div>
                </div>
            </div>


        </div>

    )
}
