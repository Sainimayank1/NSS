import React from 'react'
import "./Register.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { registerMethod } from '../../Store/AsyncMethods/registerMethod'
import toast, { Toaster } from "react-hot-toast"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loading from '../Loader/Loading'
import { Link } from 'react-router-dom'
import logo from './profile-user.png'


function Register(prop) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropEmail , setEmialDrop] = useState(false);
  const [state, setState] = useState(
    {
      name: "",
      email: "",
      phone:"",
      password: "",
      cpassword: ""
    }
  )
  const { loading, user ,RegisterError , RegisterMessage} = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (RegisterError.length > 0)
      RegisterError.map(error => toast.error(error.msg))
    dispatch({type:"CLEAR-REGISTER-ERRORS"});

  }, [RegisterError])


  useEffect(() => {
    if (RegisterMessage.length > 0)
    {
      toast.success(RegisterMessage);
      // navigate('/login')
    }
    dispatch({type:"CLEAR-REGISTER-SUCCESS"});
  }, [RegisterMessage])
  
  const handleState = (e) => {
    const { name, value } = e.target
    if(name == "email")
    {
      if(!isDropEmail)
      setEmialDrop(!isDropEmail)
    }
    setState({ ...state, [name]: value })
  }

  const handleClick = async (e) => {
    e.preventDefault();
    if (state.password !== state.cpassword)
      toast.error("Password does't Match, Please check");
    else
      dispatch(registerMethod(state));

  }


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>
      <div className='register-container '>
        <div className='form '>
          <Toaster position="top-right" reverseOrder={false} toastOptions={{
              // Define default options
              duration: 5000,
              style: {
                fontsize:'16px'
              },
            }}/>
          <img src={logo} alt='logo' className='img-contain'></img>
          <span className='login-span'>Register</span>
          <p className='pl'>Please enter your Details</p>
          <form id='register-form' onSubmit={handleClick} method="POST">
            <input type="text" name="name" value={state.name} placeholder='Enter Name' onChange={handleState} ></input>
            <input type="text" name="email" value={state.email} placeholder='Enter Email' onChange={handleState}></input>
            <div className={isDropEmail ? 'dropdown-email' : 'display-none'}>Please use collage email id.</div>
            <input type="text" name="phone" value={state.phone} placeholder='Enter mobile no' onChange={handleState}></input>
            <input type="password" name="password" value={state.password} placeholder='Enter Password' onChange={handleState}></input>
            <input type="password" name="cpassword" value={state.cpassword} placeholder='Re-Enter Password' onChange={handleState}></input>
            <button type="submit" className="button" >{loading ? "......": 'Register'}</button>
            <p className='p1'>OR</p>
            <p className='para2'>Already have an account? <Link to="/login">Login here</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register