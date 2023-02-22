import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar blue-bg'>
      <div className='Navbar-left'>
      
        <a href='./'>Home</a>
      </div>
      <div className='Navbar-right'>
          <ul>
            <li><a href='./'>Posts</a></li>
            <li><a href='./'>Create Post</a></li>
            <li><a href='./'>Login</a></li>
          </ul>
      </div>
    </div>


  )
}

export default Navbar