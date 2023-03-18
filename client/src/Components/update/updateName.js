import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar/SideBar.js'
import { Helmet } from 'react-helmet'
import "./updateName.css"
import { useState } from 'react'
import updateName from '../../Store/AsyncMethods/updateName'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from "react-hot-toast"
import { useNavigate} from 'react-router-dom'
import Loading from "../Loader/Loading.js"


function UpdateName() {
    const navigate = useNavigate();
    const { user ,loading } = useSelector(state => state.authReducer);
    const {profileError} = useSelector(state => state.profileReducer);
    const {updateNameError} = useSelector(state => state.updateReducer);
    const [name,setName] = useState('')
    const userName = user.name;
    const {_id} = user;
    const dispatch = useDispatch();

    // useEffect(()=>{
    //    setName(userName)
    // },[])

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        dispatch(updateName({name,_id}))

    }

    useEffect(()=>
    {
       if(updateNameError.length > 0)
       {
             updateNameError.map((error)=>toast.error(error.msg))
             dispatch({type:'RESET_UPDATENAMEERROR'});
       }
    },[updateNameError])

    // useEffect(()=>
    // {
    //    if(redirect)
    //    {
    //      navigate('/dashboard/1')
    //    }
    // },[redirect])
     
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update Name....</title>
            </Helmet>
            {loading ? <Loading /> :
             <div className='dash-user-container  bg-grey'>
                <Toaster position="top-right" reverseOrder={false} toastOptions={{ style: { fontSize: '14px' } }} />
                <div className='dash-user-left'>
                    {loading ? '' : <Sidebar />}
                </div>
                <div className='dash-user-right'>
                <div className='main-updateName update-name-main'>
                    <h3>Update Name</h3>
                    <div className=''>
                        <form >
                            <div className=''>
                                <input className="bg-grey" onChange={(e)=>{setName(e.target.value)}} type="text" id='' placeholder='Name.' value={name}></input>
                                <input type="submit" className='slug-button-submit' value="UPDATE NAME" onClick={handleSubmit}></input>
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

export default UpdateName