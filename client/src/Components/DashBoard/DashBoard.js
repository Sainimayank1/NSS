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
import deletePost from  "../../Store/AsyncMethods/deletePost.js"
import moment from "moment";


function Dashboard() {
    const { token } = useSelector(state => state.authReducer)
    const dispatch = useDispatch();
    const {  message } = useSelector(state => state.PostReducer);
    const { user, loading } = useSelector(state => state.authReducer);
    const { posts, count, perPage } = useSelector(state => state.fetchReducer);
    let { page } = useParams();
    if (page === undefined)
        page = 1;
    const _id = user._id;


    useEffect(() => {
        if (message.length != 0) {
            toast.success(message);
            dispatch({ type:"REMOVE_MESSAGE"});
        }
        dispatch(fetchPosts(_id, page))
    }, [page , message])


    const delePost = async (id) => {
        let confirm = window.confirm("Are you really want to delete Post..")
        if (confirm) {
            dispatch(deletePost(id));
            // dispatch(fetchPosts(_id, page));
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
                    <Toaster position="top-right" reverseOrder={false} toastOptions={{ style: { fontSize: '14px' } }} />
                    <div className='dash-user-left'>
                        <Sidebar />
                    </div>
                    <div className='dash-user-right'>
                        <div className='grid-user-container'>
                            {posts.length > 0 ?posts.map((content) =>
                                <div className='grid-user-items' key={content._id} >
                                    <div className='div-user-first'>
                                        <Link to={'/details/:' + content._id}>
                                            {content.title}
                                        </Link>
                                        <span className='grid-user-items-span'>Published: {moment(content.createdAt).fromNow()}</span>
                                    </div>
                                    <div>
                                        {/* <Link className='dash-link' to={'/updateImage/' + content._id}><BsImage /></Link> */}
                                        {/* <Link to={'/edit/' + content._id}><AiOutlineEdit className='dash-link' /></Link> */}
                                        <Link ><AiFillDelete onClick={() => delePost(content._id)} className='dash-link' /></Link>
                                    </div>
                                </div>) : <div className='dash-user-right-no-post'>No post</div>}
                        </div>
                        <Pagination path="dashboard" page={page} count={count} perPage={perPage} />
                    </div>
            </div>
            }
        </>
    )
}

export default Dashboard