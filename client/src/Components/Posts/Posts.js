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
// import Pagination from '../Pagination/Pagination';


function Posts() {
    const dispatch = useDispatch();
    const param = useParams();
    const page = param.page;
    let isTrue = true;
    const { user, loading } = useSelector(state => state.authReducer);
    const { AllPosts } = useSelector(state => state.PostReducer);
    const _id = user._id;

    useEffect(() => {
        dispatch(FetchAllPosts(page))
        isTrue = false;
    }, isTrue)



    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Posts</title>
            </Helmet>
            <div className='dash-container'>
                <Toaster position="top-right" reverseOrder={false} toastOptions={{ style: { fontSize: '14px' } }} />
                <div className='grid-container'>
                    {loading ? <Loading /> : AllPosts.length > 0 ?
                        AllPosts.map((content) =>
                            <div className='grid-main'>
                                <div className='grid-first-level'>
                                    <div className='grid-logo'>
                                        <img src='./picture/profile-user.png' alt='logo' className='img-container'></img>
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
                                    <AiOutlineLike className='fourth-level-logo'/>
                                    <AiOutlineDislike className='fourth-level-logo'/>
                                </div>
                                {/* <Pagination path="dashboard" page={page} count={count} perPage={perPage} /> */}
                            </div>
                        ) : <div>No post</div>}
                </div>
            </div>
        </>
    )
}

export default Posts