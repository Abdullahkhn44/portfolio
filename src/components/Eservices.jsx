import React from 'react'
import '../assets/styles/Eservices.css'
import Api from '../assets/icons/API.png'
import AR from '../assets/icons/AR.png'
import Debug from '../assets/icons/debug2.png'
import ServiceImage from '../assets/images/six.jpg'
function Eservices() {
    return (
        <div className='EmainDiv'>

            <img className='Eservice-image' src={ServiceImage} />
            <div className='EtitleDiv'>
                <h1 className='EserviceTitle'>More Services...</h1>

            </div>
            <div className='EserviceContainer'>
                <div className='EserviceItem'>
                    <img className='icon' src={Api} alt="API Icon" />
                    <p className='title'>API</p>
                </div>
                <div className='EserviceItem'>
                    <img className='icon' src={AR} alt="AR Icon" />
                    <p className='title'>AR</p>
                </div>
                <div className='EserviceItem'>
                    <img className='icon' src={Debug} alt="Notifications Icon" />
                    <p className='title'>Debug</p>
                </div>
            </div>
        </div>
    )
}

export default Eservices