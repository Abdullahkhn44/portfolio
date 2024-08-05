import React from 'react'
import '../assets/styles/header.css'

function Header() {
  return (

    <header className='header' >
      <nav className='navbar'>
        <ul className='ulist'>
          <li className='items'><a  href='#'>Home</a></li>
          <li className='items'><a href='#'>About</a></li>
          <li className='items'><a href='#'>Services</a></li>
          <li className='items'><a href='#'>Work</a></li>
          <li className='items'><a href='#'>Contact</a></li>
        </ul>
      </nav>
    </header>

  )
}

export default Header