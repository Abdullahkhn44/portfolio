import React from 'react'
import '../assets/styles/Services.css'
import ServiceImage from '../assets/images/six.jpg'
import DevImage from '../assets/images/appdev2.png'

function Services() {
    return (
        <div className='MainServiceDiv'>

            <img className='service-image' src={ServiceImage} />
            <div className='titleDiv'>
                <h1 className='serviceTitle'>Services</h1>

            </div>
            <div className='makingAppDiv'>
                <div className='makingAppImage'>
                    <img className='devImage' src={DevImage} />
                </div>
                <div className='makingAppText'>
                    <h2 className='AppText'>Develop Customized Apps</h2>
                    <p className='AppTextpara'>I specialize in crafting fully customized mobile applications tailored to your specific needs, ensuring they run seamlessly on both iOS and Android platforms. Using React Native, I can deliver high-performance apps with a single codebase, reducing development time and costs while maintaining the quality and functionality expected from a native app experience. Whether you need a business app, social platform, or e-commerce solution, I bring your vision to life with precision and efficiency.</p>
                </div>
            </div>

            <div className='makingAppDiv2'>
                <div className='makingAppImage2'>
                    <img className='devImage2' src={DevImage} />
                </div>
                <div className='makingAppText2'>
                    <h2 className='AppText2'>Develop Customized Apps</h2>
                    <p className='AppTextpara2'>I specialize in crafting fully customized mobile applications tailored to your specific needs, ensuring they run seamlessly on both iOS and Android platforms. Using React Native, I can deliver high-performance apps with a single codebase, reducing development time and costs while maintaining the quality and functionality expected from a native app experience. Whether you need a business app, social platform, or e-commerce solution, I bring your vision to life with precision and efficiency.</p>
                </div>
            </div>
            <div className='makingAppDiv3'>
                <div className='makingAppImage3'>
                    <img className='devImage3' src={DevImage} />
                </div>
                <div className='makingAppText3'>
                    <h2 className='AppText3'>Develop Customized Apps</h2>
                    <p className='AppTextpara3'>I specialize in crafting fully customized mobile applications tailored to your specific needs, ensuring they run seamlessly on both iOS and Android platforms. Using React Native, I can deliver high-performance apps with a single codebase, reducing development time and costs while maintaining the quality and functionality expected from a native app experience. Whether you need a business app, social platform, or e-commerce solution, I bring your vision to life with precision and efficiency.</p>
                </div>
            </div>
        </div >
        
    )
}

export default Services