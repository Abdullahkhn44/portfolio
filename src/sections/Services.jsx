import React from 'react'
import '../assets/styles/Services.css'
import ServiceImage from '../assets/images/six.jpg'
import DevImage from '../assets/images/appdev2.png'
import Eservices from '../components/Eservices'

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
                    <h2 className='AppText2'>App Maintenance and Support</h2>
                    <p className='AppTextpara2'>I provide comprehensive app maintenance and support to ensure your React Native application remains up-to-date, secure, and fully functional. This includes regular updates, bug fixes, performance enhancements, and the addition of new features as your business evolves. My goal is to keep your app running smoothly, minimizing downtime and ensuring a seamless experience for your users, so you can focus on growing your business without worrying about technical issues.</p>
                </div>
            </div>
            
            <div className='makingAppDiv3'>
                <div className='makingAppImage3'>
                    <img className='devImage3' src={DevImage} />
                </div>
                <div className='makingAppText3'>
                    <h2 className='AppText3'>Backend Development for Mobile Apps</h2>
                    <p className='AppTextpara3'>I offer robust backend development services to support your mobile applications, ensuring they are scalable, secure, and efficient. By creating and integrating powerful backend systems, APIs, and databases, I provide the foundation for your app’s functionality, enabling real-time data processing, user authentication, and seamless interactions between users and your app. Whether you need cloud-based solutions or custom server-side logic, I ensure your app's backend is as reliable and responsive as the front end.</p>
                </div>

            </div>
            
        </div >

    )
}

export default Services