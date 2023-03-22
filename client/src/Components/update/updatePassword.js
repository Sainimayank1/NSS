import React from 'react'
import "./updatePassword.css"
import { Helmet } from 'react-helmet'
import Sidebar from '../Sidebar/SideBar'
import toast, { Toaster } from "react-hot-toast"
import Loading from '../Loader/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import updatePassword from "../../Store/AsyncMethods/updatePassword.js"
import { useEffect } from 'react'

function UpdatePassword() {
    const navigate = useNavigate();
    const { user, loading } = useSelector(state => state.authReducer);
    const {updatePasswordError,updatePasswordSucces} = useSelector(state => state.updateReducer);
    const [state, setState] = useState({
        current: "",
        newPassword: ""
    })
    const { _id } = user;
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePassword({ current: state.current, newPassword: state.newPassword, _id }))
    }

    useEffect(()=>
    {
       if(updatePasswordError.length > 0)
       {
        updatePasswordError.map((error)=>toast.error(error.msg))
             dispatch({type:'RESET_UPDATEPASSWORDERROR'});
       }
    },[updatePasswordError])

    useEffect(()=>
    {
       if(updatePasswordSucces != "")
       {
            toast.success(updatePasswordSucces)
             dispatch({type:'RESET_UPDATEPASSWORDSUCESS'});
       }
    },[updatePasswordSucces])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update Password....</title>
            </Helmet>
            {loading ? <Loading /> :
                <div className='dash-user-container  bg-grey'>
                    <Toaster position="top-right" reverseOrder={false} toastOptions={{ style: { fontSize: '14px' } }} />
                    <div className='dash-user-left'>
                        {loading ? '' : <Sidebar />}
                    </div>
                    <div className='dash-user-right'>
                        <div className='main-updateName update-name-main'>
                            <h3>Change Password</h3>
                            <div className=''>
                                <form >
                                    <div className=''>
                                        <input className="bg-grey" onChange={(e) => { setState({ ...state, current: e.target.value }) }} type="password" id='' placeholder='Current Password' value={state.current}></input>
                                        <input className="bg-grey" onChange={(e) => { setState({ ...state, newPassword: e.target.value }) }} type="password" id='' placeholder='New Password' value={state.newPassword}></input>
                                        <input type="submit" className='slug-button-submit' value="UPDATE PASSWORD" onClick={handleSubmit}></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default UpdatePassword