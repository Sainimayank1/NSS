import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './feedback.css'
import sendFeedback from '../../Store/AsyncMethods/sendFeedback';
import toast, { Toaster } from "react-hot-toast"

const Feedback = () => {
    const [message , setMessage] = useState({message:""});
    const { user , loading} = useSelector(state => state.authReducer);
    const {feedback} = useSelector(state =>state.updateReducer)
    const {_id,name} = user;
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(sendFeedback({_id,name,message}))
    };

    useEffect(()=>
    {
        if(feedback != "")
        {
            toast.success(feedback)
            dispatch({type:"RESET_FEEDBACK_RES"})
        }
    },[feedback])


    return (
        // < className="contact" id="connect">
        <div className='feed-back-main'>
        <Toaster position="right-top" reverseOrder={false} toastOptions={{ style: { fontSize: '14px' } }} />
            <div className="feed-back">
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit} className="feed-back-form">
                    <textarea rows="6" value={message.message} placeholder="Message" onChange={(e) => setMessage({...message , message:e.target.value})}></textarea>
                    <button type="submit" className='feed-back-btn'><span>{loading ? "...." : "Send"}</span></button> 
                </form>
            </div>
        </div>
    )
}

export default Feedback