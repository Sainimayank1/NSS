import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import "./dashboard.css"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from "react-hot-toast"
import { Link, useParams } from 'react-router-dom';
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import Loading from '../Loader/Loading';
import Sidebar from '../Sidebar/SideBar';
import Pagination from "../Pagination/Pagination.js"
import { BsImage } from 'react-icons/bs'
import fetchPosts from '../../Store/AsyncMethods/fetchPosts';
import axios from 'axios'
import moment from "moment";


function Dashboard() {
    const { token } = useSelector(state => state.authReducer)
    const dispatch = useDispatch();
    // const { redirect, message } = useSelector(state => state.PostReducer);
    const { user, loading } = useSelector(state => state.authReducer);
    const { posts, count, perPage } = useSelector(state => state.fetchReducer);
    // const { updateMsg } = useSelector(state => state.updateReducer)
    let { page } = useParams();
    if (page === undefined)
        page = 1;
    const _id = user._id;


    useEffect(() => {
        // if (redirect)
        //     dispatch({ type: "REDIRECT_FALSE" })
        // if (message.length !== 0) {
        //     toast.success(message)
        //     dispatch({ type: "REMOVE_MESSAGE" });
        // }
        // if (updateMsg.length !== 0) {
        //     toast.success(updateMsg)
        //     dispatch({ type: "RESET_UPDATE_MSG" })
        // }
        dispatch(fetchPosts(_id, page))
    }, [page])

    const delePost = async (id) => {
        const confirm = window.confirm("Are you really want to delete Post..")
        if (confirm) {
            dispatch({ type: "SET_LOADER" })
            const config =
            {
                headers: {
                    Authorizaton: 'Bearer ' + token
                }
            }
            try {
                const response = await axios.post('http://localhost:5000/post/delete/' + id, config)
                dispatch({ type: "CLOSE_LOADER" })
                dispatch(fetchPosts(_id, page))
                dispatch({type:"SET_MESSAGE",payload:response.data.msg});
                // dispatch({ type: "SET_POSTS", payload: { data, count, perPage } })
            } catch (error) {
                dispatch({ type: "CLOSE_LOADER" })
            }
        }
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
            </Helmet>
                {loading ? <Loading /> :
            <div className='dash-user-container '>
                    <Toaster position="top-center" reverseOrder={false} toastOptions={{ style: { fontSize: '14px' } }} />
                    <div className='dash-user-left'>
                        <Sidebar />
                    </div>
                    <div className='dash-user-right'>
                        <div className='grid-user-container'>
                            {posts.length > 0 ?posts.map((content) =>
                                <div className='grid-user-items' key={content._id} >
                                    <div className='div-user-first'>
                                        <Link to={'/details/' + content._id}>
                                            {content.title}
                                        </Link>
                                        <span className='grid-user-items-span'>Published: {moment(content.createdAt).fromNow()}</span>
                                    </div>
                                    <div>
                                        <Link className='dash-link' to={'/updateImage/' + content._id}><BsImage /></Link>
                                        <Link to={'/update/' + content._id}><AiOutlineEdit className='dash-link' /></Link>
                                        <Link ><AiFillDelete onClick={() => delePost(content._id)} className='dash-link' /></Link>
                                    </div>
                                </div>) : <div>No post</div>}
                        </div>
                        <Pagination path="dashboard" page={page} count={count} perPage={perPage} />
                    </div>
            </div>
            }
        </>
    )
}

export default Dashboard