import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import "./Posts.css"
import { useSelector } from 'react-redux';
import axios from "axios"
import { useDispatch } from 'react-redux';
import moment from "moment"
import toast, { Toaster } from "react-hot-toast"
import FetchAllPosts from "../../Store/AsyncMethods/FetchAllPosts.js"
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import Loading from "../Loader/Loading";
import { useParams } from 'react-router-dom';
import LOGO from "../profile-user.png"
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';

function Posts() {
    const dispatch = useDispatch();
    const param = useParams();
    const page = param.page;
    let isTrue = true;
    const { user, loading, token } = useSelector(state => state.authReducer);
    const { AllPosts, Likes, Dislikes, count, perPage } = useSelector(state => state.PostReducer);
    const _id = user._id;
    const [isLike, setlike] = useState(false);
    const [isDrop, setDrop] = useState(false)

    useEffect(() => {
        dispatch(FetchAllPosts(page))
        isTrue = false;
    }, isTrue)

    const HandleLike = async (prop) => {
        try {
            const config =
            {
                headers: {
                    Authorizaton: 'Bearer ' + token
                }
            }
            setlike(false)
            prop.likes.map((element) => {
                if (_id == element) {
                    setlike(true)
                }
            })
            const props = prop._id;
            const sendData = { props, _id }
            if (!isLike) {
                const response = await axios.post('http://localhost:5000/post/like', sendData, config);
                dispatch(FetchAllPosts(page))
                setlike(true)
            }
        } catch (error) {
            dispatch(FetchAllPosts(page))
        }
    }

    const HandleDislike = async (prop) => {
        dispatch({ type: "SET_LOADER" })
        try {
            const config =
            {
                headers: {
                    Authorizaton: 'Bearer ' + token
                }
            }
            const props = prop._id;
            const sendData = { props, _id }
            const response = await axios.post('http://localhost:5000/post/dislike', sendData, config);
            dispatch(FetchAllPosts(page))
            dispatch({ type: "CLOSE_LOADER" })
        } catch (error) {
            dispatch({ type: "CLOSE_LOADER" })
            dispatch(FetchAllPosts(page))
        }
    }


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Posts</title>
            </Helmet>
            <div className='dash-container'>
                <Toaster position="top-right" reverseOrder={false} toastOptions={{ style: { fontSize: '14px' } }} />
                {loading ? <Loading /> :
                    <div className='grid-container'>
                        {AllPosts.length > 0 ?
                            AllPosts.map((content) =>
                                <div className='grid-main' key={content._id}>
                                    <div className='grid-first-level'>
                                        <div className='grid-logo'>
                                            <img src={LOGO} alt='logo' className='img-container'></img>
                                        </div>
                                        <div className='grid-name'>
                                            {content.userName}
                                        </div>
                                        <span>{moment(content.createdAt).fromNow()}</span>
                                    </div>
                                    <div className='grid-second-level'>
                                        <div className='grid-title'>
                                        <Link to={'/details/:'+content._id}>{content.title}</Link>
                                        </div>
                                        <div className='grid-description'>
                                            {content.description}
                                        </div>
                                    </div>
                                    <div className='grid-third-level'>
                                        <img src={content.image.url} alt='img' className='user-img'></img>
                                    </div>
                                    <div className={user ? 'grid-fourth-level' : 'hidden'}>
                                        <span className='grid-fourth-level-like-main'>
                                            <AiOutlineLike className='fourth-level-logo' onClick={() => { HandleLike(content) }} />
                                            <span className='grid-fourth-level-dislike-main'>
                                                <AiOutlineDislike className='fourth-level-logo' onClick={() => { HandleDislike(content) }} />
                                                <span className='grid-fourth-level-comment-main'>
                                                    <BiComment className='fourth-level-logo' onClick={() => {
                                                            <Link to={'/details/'+content._id}></Link>
                                                    }} />
                                                </span>
                                            </span>
                                        </span>
                                        <span className="grid-fourth-level-total-like">{content.likes.length} Likes</span>
                                    </div>
                                </div>
                            ) : <div>No post</div>}
                    </div>}
                {loading ? "" : <Pagination path="posts" page={page} count={count} perPage={perPage} />}
            </div>
        </>
    )
}

export default Posts