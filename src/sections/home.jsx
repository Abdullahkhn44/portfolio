import React from 'react'
import Header from '../components/header'
import bannerimage from '../assets/images/seven.jpg'
import '../assets/styles/home.css'

export default function Home() {
    return (
        <div>
            <Header />
            <div className='banner'>
                <img className='banner-image' src={bannerimage} alt='banner - image' />
               
            </div>
        
        </div>

    )
}
