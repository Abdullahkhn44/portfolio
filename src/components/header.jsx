import React from 'react'
import '../assets/styles/header.css'

function Header() {
  return (

    <header className='header' >
      <nav className='navbar'>
        <ul className='ulist'>
          <li className='items'><a  href='#home'>Home</a></li>
          <li className='items'><a href='#About'>About</a></li>
          <li className='items'><a href='#Services'>Services</a></li>
          <li className='items'><a href='#Work'>Work</a></li>
          <li className='items'><a href='#Contact'>Contact</a></li>
        </ul>
      </nav>
    </header>

  )
}

export default Header