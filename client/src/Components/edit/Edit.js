import React from 'react'
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import updatePost from '../../Store/AsyncMethods/updatePost';
import toast, { Toaster } from "react-hot-toast"
import fetchdetails from "../../Store/AsyncMethods/detailsMethod"
import Loading from '../Loader/Loading.js'

function Edit() {
    const [value, setValue] = useState('');
    const [state, setState] = useState({ title: "", desc: "" });
    const {updatePostSucces,updatePostError} = useSelector(state => state.updateReducer);
    const { Postid } = useParams();
    const {loading} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    let isTrue = true;
    const { details } = useSelector(state => state.PostReducer)
    
    useEffect(() => {
        dispatch(fetchdetails(Postid));
        setState({...state,title:details.data.title,desc:details.data.description})
        isTrue = false
      }, [isTrue])

      const updatepost = (e) =>
      {
          e.preventDefault();
          const values = {title:state.title,description:state.desc,id:Postid}
        dispatch(updatePost(values))
    }

    useEffect(()=>
    {
        if(updatePostError.length > 0)
        {
            updatePostError.map((error)=>{
                toast.error(error.msg)
            })
            dispatch({type:"RESET_UPDATE_POST_ERROR"})
        }
        if(updatePostSucces !== "")
        {
            toast.success(updatePostSucces);
            dispatch({type:"RESET_UPDATE_POST_SUCESS"})
        }

    },[updatePostSucces,updatePostError])


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
                            <div className='desc'>
                                <label htmlFor="description">Meta Description</label>
                                <textarea name="description" cols='30' rows="10" id="description" className='bg-grey' maxLength="400" placeholder='Meta Description...' value={state.desc} onChange={(e) => setState({ ...state, desc: e.target.value })}>
                                </textarea>
                                <p>{state.desc ? state.desc.length : 0} <span>MAX:400</span></p>
                            </div>
                            <input type="submit"  value={loading ? "..." : "Edit Post..."} className='slug-button-submit'></input>
                        </form>

                    </div>
                </div>
            </div>}
        </>
    )
}

export default Edit