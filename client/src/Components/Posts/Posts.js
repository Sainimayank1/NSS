import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import "./Posts.css"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import moment from "moment"
import toast, { Toaster } from "react-hot-toast"
import FetchAllPosts from "../../Store/AsyncMethods/FetchAllPosts.js"
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Loading from "../Loader/Loading";
import { useParams } from 'react-router-dom';
import LOGO from "../profile-user.png"
import Pagination from '../Pagination/Pagination';
import {LikeMethod  , DislikeMethod} from "../../Store/AsyncMethods/LikeAndDislikeMethod.js"

function Posts() {
    const dispatch = useDispatch();
    const param = useParams();
    const page = param.page;
    let isTrue = true;
    const { user, loading } = useSelector(state => state.authReducer);
    const { AllPosts, Likes, Dislikes, count, perPage } = useSelector(state => state.PostReducer);
    const _id = user._id;
    let likess, dislikess;

    useEffect(() => {
        dispatch(FetchAllPosts(page))
        isTrue = false;
    }, [isTrue, page])

    const HandleLike = (props) => {
        // console.log(props._id , props.userId)
        dispatch(LikeMethod(props));
    }

    const HandleDislike = (props) => {
        // dispatch(DislikeMethod(props));
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
                                        <span>{moment(content.updatedAt).fromNow()}</span>
                                    </div>
                                    <div className='grid-second-level'>
                                        <div className='grid-title'>
                                            {content.title}
                                        </div>
                                        <div className='grid-description'>
                                            {content.description}
                                        </div>
                                    </div>
                                    <div className='grid-third-level'>
                                        <img src={content.image.url} alt='img' className='user-img'></img>
                                    </div>
                                    <div className='grid-fourth-level'>
                                        <span className='grid-fourth-level-like-main'>
                                            <AiOutlineLike className='fourth-level-logo' onClick={()=>{HandleLike(content)}} />
                                            <span className="grid-fourth-level-total-like">{Likes.length > 0 ?
                                                Likes.map((like) => {
                                                    if (like.PostId === content.id) {
                                                        likess = likess + 1;
                                                    }
                                                    <span>{likess}</span>
                                                }
                                                )
                                                : 0}</span>
                                        </span>
                                        <span className='grid-fourth-level-dislike-main'>
                                            <AiOutlineDislike className='fourth-level-logo' onClick={HandleDislike(content._id, content.userId)} />
                                            <span className='grid-fourth-level-total-dislike'>
                                                {Dislikes.length > 0 ?
                                                    Dislikes.map((like) => {
                                                        if (like.PostId === content.id) {
                                                            dislikess = dislikess + 1;
                                                        }
                                                        <span>{dislikess}</span>
                                                    }
                                                    )
                                                    : 0}
                                            </span>
                                        </span>
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