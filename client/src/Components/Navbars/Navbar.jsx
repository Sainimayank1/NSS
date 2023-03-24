import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);


  const change = () => {
    if (show)
      setShow(false)
    else
      setShow(true)
    console.log(show)
  }
  const logout = () => {

    dispatch({ type: "CLEAR-LOGIN-ERRORS" })
    const token = localStorage.getItem("NSSTOKEN");
    if (token)
      localStorage.removeItem("NSSTOKEN");
    dispatch({ type: "REMOVE-USER" });
    navigate("/");
  }
  return (
    <>
      <div className='Navbar  blue-bg'>
        <div className='Navbar-left'>
          <Link to='/'>Home</Link>
        </div>
        <div className='Navbar-right'>
          {user ? <>
            <div className='Navbar-posts'><Link to='/posts/1'>Posts</Link></div>
            <div className='Navbar-create'><Link to='/createPost'>Create Post</Link></div>
            <div className='Navbar-name'><Link to="/dashboard/1">{user.name}</Link></div>
            <div className='Navbar-login'><Link onClick={() => { logout() }}>Logout</Link></div>
          </>
            :
            <>
              <div className='Navbar-posts'><Link to='/posts/1'>Posts</Link></div>
              <div className='Navbar-login'><Link to='/login'>Login</Link></div>
              <div className='Navbar-login'><Link to='/register'>Register</Link></div>
              {/* <div className='Navbar-login'><Link to='/medals'>Medals</Link></div> */}
            </>
          }
        </div>
      </div>
      <div className='phone-main' onClick={() => change()}>
        <div className='phone'>
          <div className={show ? 'phone-1' : "phone-1-x" }></div>
          <div className={show ? 'phone-2' : "phone-2-hidden" }></div>
          <div className={show ? 'phone-3' : "phone-3-x " }></div>
        </div>
      </div>
      <div className={show ? 'slider-hidden' : 'slider-main blue-bg'}>
      <div className='slider-dropdown'>
      <div className='slider-home' onClick={() => change()}>
          <Link to='/'>Home</Link>
        </div>
          {user ? <>
            <div className='slider-posts' onClick={() => change()}><Link to='/posts/1'>Posts</Link></div>
            <div className='slider-create' onClick={() => change()}><Link to='/createPost'>Create Post</Link></div>
            <div className='slider-create' onClick={() => change()}><Link to='/dashboard/1'>{user.name}</Link></div>
            <div className='slider-login' onClick={() => change()}><Link onClick={() => { logout() }}>Logout</Link></div>
          </>
            :
            <>
              <div className='slider-posts' onClick={() => change()}><Link to='/posts/1'>Posts</Link></div>
              <div className='slider-login' onClick={() => change()}><Link to='/login'>Login</Link></div>
              <div className='slider-register' onClick={() => change()}><Link to='/register'>Register</Link></div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar