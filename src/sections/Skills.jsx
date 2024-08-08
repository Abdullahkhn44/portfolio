import React from 'react'
import '../assets/styles/Skills.css'
import firebase from '../assets/images/firebase.png'
import react from '../assets/images/react.png'
import node from '../assets/images/node.png'
import redux from '../assets/images/redux.png'
import js from '../assets/images/js.png'
import github from '../assets/images/github.png'
import git from '../assets/images/git.png'



function Skills() {
    return (
        <div className='Maindiv'>
            <div className='skillDiv'>
                <h1 className='skills'>Skills</h1>
                <div className='paramain'>
                    <div className='paraskill'>
                        <h3 className='skillpara'>I am proficient in these skills and continuously seek to enhance my knowledge and stay current in these areas.</h3>
                    </div>
                </div>
            </div>
            <div className='ImagesDiv'>
                <img src={react} className='img' />
                <img src={redux} className='img' />
                <img src={js} className='img' />
                <img src={node} className='img' />
                <img src={firebase} className='img' />
                <img src={git} className='img' />
                <img src={github} className='img' />
            </div>

        </div>
    )
}

export default Skills