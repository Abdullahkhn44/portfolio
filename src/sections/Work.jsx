import React from 'react'
import '../assets/styles/Work.css'
import { useState, useEffect } from 'react';
import vibeChat1 from '../assets/images/vibechat1.png'
import vibeChat2 from '../assets/images/vibechat2.png'
import vibeChat3 from '../assets/images/vibechat3.png'
import vibeChat4 from '../assets/images/vibechat4.png'
import detect from '../assets/images/detect.JPG'
import ar1 from '../assets/images/ar1.PNG'
import ar2 from '../assets/images/ar2.jpg'
import ar3 from '../assets/images/ar3.jpg'
import ar4 from '../assets/images/ar4.jpg'
import ar5 from '../assets/images/ar5.PNG'

function Work() {

    const [imageIndex, setImageIndex] = useState(0);
    const [imageIndex2, setImageIndex2] = useState(0);
    const images = [
        vibeChat1,
        vibeChat2,
        vibeChat3,
        vibeChat4,

    ];
    const images2 = [
        ar1,
        ar2,
        ar3,
        ar4,
    

    ];



    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex2((prevIndex) => (prevIndex + 1) % images2.length);
        }, 3500);

        return () => clearInterval(intervalId);
    }, []);



    return (
        <div className='workMainDiv'  id="Work">
           
            <div className='workTitleDiv'><h1 className='workText'>Work So Far</h1></div>

            <div className='WorkContainer'>
                <div className='workOne'>
                    <div className='leftSide'>
                        <div className='innerContainer'>
                            <div className='leftTitle'><h3 className='containerTitle'>VibeChat</h3></div>
                            <div className='leftContent'><p className='leftPara'>
                                A chat application known as Vibe Chat which basic functionalities include:
                                Chatting based on text and image sharing.
                                User Profile management.
                                OTP Authentication

                                Vibe Chat is made in React Native Cli using Firebase as BaaS, which uses phone number to generate a OTP, user adds edit and add his profile picture, name , email. Vibe Chat uses user phone contacts to render other users if the other users have app already installed they will be shown to users chat screen. A user can chat with others while sharing images as well.
                            </p></div>
                            <div className='leftButton'><button className='buttonInner'> <p>Check On Linkedin</p> </button> <button className='buttonInner'> <p>Check On Github</p> </button></div>
                        </div>
                    </div>
                    <div className='rightSide'>
                        <img src={images[imageIndex]}
                            className='rightImage' />
                    </div>
                </div>

                {/* SECOND WORK PROJECT */}

                <div className='workOne'>
                    <div className='leftSide'>
                        <div className='innerContainer'>
                            <div className='leftTitle'><h3 className='containerTitle'>Object Detection React Native</h3></div>
                            <div className='leftContent'><p className='leftPara'>
                                This is a react native cli android project for simple object detection which uses a tflite model and also flask server to receive and process these images after that the images with results are displayed inside the app after user captures the image from the app.
                                Used react native cli for app and pyton flask server for image processing.
                            </p></div>
                            <div className='leftButton'><button className='buttonInner'> <p>Check On Linkedin</p> </button> <button className='buttonInner'> <p>Check On Github</p> </button></div>
                        </div>
                    </div>
                    <div className='rightSide'>
                        <img src={detect}
                            className='rightImage' />
                    </div>
                </div>
                {/* TIRD WORK PROJECT */}
                <div className='workOne'>
                    <div className='leftSide'>
                        <div className='innerContainer'>
                            <div className='leftTitle'><h3 className='containerTitle'>Booking Vehicles for goods transfer using AR</h3></div>
                            <div className='leftContent'><p className='leftPara'>
                                The application offers two user profiles: Driver and Customer. Customers can seamlessly book vehicles for goods transport by following an intuitive booking process that includes vehicle selection, specifying the type of goods, and setting pickup and destination locations via Google Maps. Upon booking confirmation, an invoice is generated, and the driver receives a job notification. The driver is provided with all necessary information, including pickup and destination points, optimal routes in Google Maps, goods details, and customer contact information, all retrieved from the database. Additionally, customers can utilize Augmented Reality (AR) to view the vehicle before booking.
                            </p></div>
                            <div className='leftButton'><button className='buttonInner'> <p>Check On Linkedin</p> </button> <button className='buttonInner'> <p>Check On Github</p> </button></div>
                        </div>
                    </div>
                    <div className='rightSide'>
                        <img src={images2[imageIndex2]}
                            className='rightImage' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work