import React from 'react'
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchPost from '../../Store/AsyncMethods/detailsMethod';
import updatePost from '../../Store/AsyncMethods/updatePost';
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import Loading from '../Loader/Loading.js'

function Edit() {
    const [value, setValue] = useState('');
    const [state, setState] = useState({ title: "", desc: "" });
    const {updateError } = useSelector(state => state.PostReducer);
    const { id } = useParams();
    const {post ,fetchStatus} = useSelector(state=>state.fetchReducer);
    const {loading} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const values = {title:state.title,body:value,description:state.desc,id:id}
    const {redirect } = useSelector(state => state.PostReducer);
    const navigate = useNavigate();


    useEffect(()=>{
        if(fetchStatus)
        {
            setState({...state,title:post.title,desc:post.description})
            setValue(post.body)
            dispatch({type:"POST_RESET"})
        }
        else
        dispatch(fetchPost(id));
    },[post])

    const updatepost = (e) =>
    {
        e.preventDefault();
        dispatch(updatePost(values))
    }

    useEffect(() => {
        if(updateError.length>0)
            updateError.map((errors) => toast.error(errors.msg));
    }, [updateError])

    useEffect(()=>
    {
        if(redirect)
        {
            navigate("/dashboard/1");
        }
    },[redirect])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Edit...</title>
            </Helmet>
            {loading ? <Loading/> :
            <div className='create_main bg-grey'>
                <div className='main_left edit-left'>
                    <div className='create_form'>
                        <h3>Edit Post</h3>
                        <form onSubmit={updatepost}>
                        <Toaster position="top-right" reverseOrder={false} toastOptions={{ style: { fontSize: '14px' } }} />
                            <div className='input_title'>
                                <label htmlFor="post_title" >Post Title</label>
                                <input className="bg-grey" type="text" id='post_title' placeholder="Post Title..." onChange={(e) => setState({ ...state, title: e.target.value })} value={state.title}></input>
                            </div>
                            <label htmlFor="post_body">Post Body</label>
                            <div className='desc'>
                                <label htmlFor="description">Meta Description</label>
                                <textarea name="description" cols='30' rows="10" id="description" className='bg-grey' maxLength="400" placeholder='Meta Description...' value={state.desc} onChange={(e) => setState({ ...state, desc: e.target.value })}>
                                </textarea>
                                <p>{state.desc ? state.desc.length : 0} <span>MAX:400</span></p>
                            </div>
                            <input type="submit"  value={loading ? "..." : "Edit Post..."} className='input_file'></input>
                        </form>

                    </div>
                </div>
            </div>}
        </>
    )
}

export default Edit