import React, { Component } from 'react'
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
import logo from './profile-user2.png';



// User Image
let imgData = {
  url: "",
  public_id: ""
};

const cloudName = "dbhvcitik";
const uploadPreset = "nssjmieti";
class CloudinaryUploadUserWidget extends Component {
  componentDidMount() {

    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        sources: ['local', 'camera', 'google_drive'],
        multiple: false,
        folder: "user_profile_uploaded_img",
        clientAllowedFormats: ["png", "jpg", "jpeg"],
        maxImageFileSize: 5000000,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          imgData.url = result.info.url;
          imgData.public_id = result.info.public_id;
          // console.log(imgData)
          document
            .getElementById("uploadeduserimage")
            .setAttribute("src", result.info.secure_url);

        }
      }
    );
    document.getElementById("uploadeduserimage").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }
  render() {
    return (
      <button id="upload_widget_Img" className="upload-widgte-btn">
        <img src={imgData.url === "" ? logo : imgData.url} id="uploadeduserimage" alt='logo' />
      </button>
    );
  }
}




// Main Function
function Register(prop) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropEmail, setEmialDrop] = useState(false);
  
  const [state, setState] = useState(
    {
      isTeacher: false,
      name: "",
      email: "",
      rollno: "",
      phone: "",
      password: "",
      cpassword: ""
    }
  )
  const [position, setPosition] = useState(true);
  const { loading, user, RegisterError, RegisterMessage } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (RegisterError.length > 0)
      RegisterError.map(error => toast.error(error.msg))
    dispatch({ type: "CLEAR-REGISTER-ERRORS" });

  }, [RegisterError])


  useEffect(() => {
    if (RegisterMessage.length > 0) {
      toast.success(RegisterMessage);
      // navigate('/login')
    }
    dispatch({ type: "CLEAR-REGISTER-SUCCESS" });
  }, [RegisterMessage])

  const handleState = (e) => {
    const { name, value } = e.target
    if (name == "email") {
      if (!isDropEmail)
        setEmialDrop(!isDropEmail)
    }
    setState({ ...state, [name]: value })
  }

  const formHandle = () => {
    setPosition(!position);
    setState({ ...state, isTeacher: position })
  }

  const handleClick = async (e) => {
    e.preventDefault();
    if (state.password !== state.cpassword)
      toast.error("Password does't Match, Please check");
    else {
      if(Object.keys(imgData).length > 0)
      {
        console.log(imgData)
        dispatch(registerMethod({state,imgData}));
      }
      else
      {
        dispatch(registerMethod(state));
      }
    }

  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>
      <div className='register-container'>
        <div className='form '>
          <Toaster position="top-right" reverseOrder={false} toastOptions={{
            // Define default options
            duration: 5000,
            style: {
              fontsize: '14px'
            },
          }} />
          {/* <img src={logo} id="upload_widget_user_Img" alt='logo' /> */}
          <CloudinaryUploadUserWidget />
            <span className='login-span'>Register</span>
          {/* <p className='pl'>Please enter your Details</p> */}
          <div className='register-st-th'>
            <div className='register-st-th-sub'>
              <div className={position ? 'left-hover register-st-th-sub-hover' : 'right-hover register-st-th-sub-hover'}>
                {position ? 'Student' : 'Teacher'}
              </div>
              <button className='register-btn' onClick={formHandle}>Student</button>
              <button className='register-btn' onClick={formHandle}>Teacher</button>
            </div>
          </div>
          {position ?
            <form id='register-form' onSubmit={handleClick} method="POST">
              <input type="text" name="name" value={state.name} placeholder='Enter Name' onChange={handleState} ></input>
              <input type="text" name="email" value={state.email} placeholder='Enter Email' onChange={handleState}></input>
              <div className={isDropEmail ? 'dropdown-email' : 'display-none'}>Please use collage email id.</div>
              <input type="text" name="rollno" value={state.rollno} placeholder='Enter Rollno' onChange={handleState}></input>
              <input type="text" name="phone" value={state.phone} placeholder='Enter Mobile no' onChange={handleState}></input>
              <input type="password" name="password" value={state.password} placeholder='Enter Password' onChange={handleState}></input>
              <input type="password" name="cpassword" value={state.cpassword} placeholder='Re-Enter Password' onChange={handleState}></input>
              <button type="submit" className="button" >{loading ? "......" : 'Register'}</button>
              {loading && <p className='login-p'>Note: Please Check Spam folder in Gmail</p>}
            </form>
            :
            <form id='register-form' onSubmit={handleClick} method="POST">
              <input type="text" name="name" value={state.name} placeholder='Enter Name' onChange={handleState} ></input>
              <input type="text" name="email" value={state.email} placeholder='Enter Email' onChange={handleState}></input>
              <div className={isDropEmail ? 'dropdown-email' : 'display-none'}>Please use collage email id.</div>
              <input type="text" name="phone" value={state.phone} placeholder='Enter Mobile no' onChange={handleState}></input>
              <input type="password" name="password" value={state.password} placeholder='Enter Password' onChange={handleState}></input>
              <input type="password" name="cpassword" value={state.cpassword} placeholder='Re-Enter Password' onChange={handleState}></input>
              <button type="submit" className="button" disabled={loading} >{loading ? "......" : 'Register'}</button>
              { loading && <p className='login-p'>Note: Please Check Spam folder in Gmail</p>}
            </form>
          }
          <div className='or'>
            <p className='p1'>OR</p>
            <p className='para2'>Already have an account? <Link to="/login">Login here</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register