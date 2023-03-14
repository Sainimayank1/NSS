import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_item '>
                <h3>Setting</h3>
            </div>
            <div className='sidebar_item'>
                <Link to='/updateName'>Change Name</Link>
            </div>
            <div className='sidebar_item'>
                <Link  to='/updatePassword'>Change Password</Link>
            </div>
        </div>
    )
}

export default Sidebar