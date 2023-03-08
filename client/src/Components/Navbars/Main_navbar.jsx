import React from 'react'
import './Navbar.css'
import LOGO from "./logo.png"
import YEARS75 from "./75years.png"
import SPECS from "./specs.png"

function MainNavbar() {
  return (
    <div className='Main_navbar'>
      <div className='Left_main_navbar'>
            <img src={LOGO} alt='logo'></img>
      </div> 
       <div className='Right_main_navbar'>
          <img src={YEARS75} alt='logo'></img>
          <img src={SPECS} alt='logo'></img>
      </div>
    </div>
  )
};

export default MainNavbar