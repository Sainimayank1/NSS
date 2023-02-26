import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar blue-bg'>
      <div className='Navbar-left'>
        <Link to='/'>Home</Link>
      </div>
      <div className='Navbar-right'>
            <div className='Navbar-posts'><Link to='/'>Posts</Link></div>
            <div className='Navbar-create'><Link to='/'>Create Post</Link></div>
            <div className='Navbar-login'><Link to='/login'>Login</Link></div>
            {/* add more navabar content */}
            <div className='Navbar-suggestion'><Link to='/Suggestion'>Suggestion</Link></div>
            <div className='Navbar-Nssvol'><Link to='/nssvol'>NSS Volunteers</Link></div>
      </div>
    </div>


  )
}

export default Navbar