import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import "./Posts.css"
import { useSelector } from 'react-redux';
import axios from "axios"
import { useDispatch } from 'react-redux';
import moment from "moment"
import toast, { Toaster } from "react-hot-toast"
import FetchAllPosts from "../../Store/AsyncMethods/FetchAllPosts.js"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import Loading from "../Loader/Loading";
import { useParams } from 'react-router-dom';
import LOGO from "../profile-user.png"
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import detailsMethod from '../../Store/AsyncMethods/detailsMethod';
import { useNavigate } from 'react-router-dom';

function Posts() {
    const dispatch = useDispatch();
    const param = useParams();
    const navigate = useNavigate();
    const page = param.page;
    let isTrue = true;
    const { user, loading, token } = useSelector(state => state.authReducer);
    const { AllPosts,count, perPage } = useSelector(state => state.PostReducer);
    const _id = user._id;
    const [isClick, setCLick] = useState(false);

    useEffect(() => {
         dispatch(FetchAllPosts(page))
        isTrue = false;
    }, isTrue)
    

    const handleClick = async (prop) => {
        if (!isClick) {
            try {
                const config =
                {
                    headers: {
                        Authorizaton: 'Bearer ' + token
                    }
                }

                const props = prop._id;
                const sendData = { props, _id }
                setCLick(true)
                const response = await axios.post('/post/like', sendData, config);
                dispatch(FetchAllPosts(page))

            } catch (error) {
                dispatch(FetchAllPosts(page))
            }
        }
        else {
            try {
                const config =
                {
                    headers: {
                        Authorizaton: 'Bearer ' + token
                    }
                }
                const props = prop._id;
                const sendData = { props, _id }
                setCLick(false)
                const response = await axios.post('/post/dislike', sendData, config);
                dispatch(FetchAllPosts(page))
            } catch (error) {
                dispatch({ type: "CLOSE_LOADER" })
            }
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
                                            <Link to={'/details/:' + content._id}>{content.title}</Link>
                                        </div>
                                        <div className='grid-description'>
                                            {content.description} {content.vedio.url != ' ' && <div><Link to={'/details/:' + content._id}>Read more...</Link></div>}
                                        </div>
                                    </div>
                                    <div className='grid-third-level'>
                                        <img src={content.image.url} alt='img' className='grid-user-img'></img>
                                        {/* <div className={content.vedio.url === ' ' ? 'hidden' : 'gird-third-level-1'  }><Link to={'/details/:' + content._id}>+1</Link></div> */}
                                    </div>
                                    <div className={user ? 'grid-fourth-level' : 'hidden'}>
                                        {/* <span className='grid-fourth-level-like-main'>
                                            {isClick ?
                                                <AiFillHeart className='fourth-level-logo' onClick={() => { handleClick(content) }} /> :
                                                <AiOutlineHeart className='fourth-level-logo' onClick={() => { handleClick(content) }} />
                                            } */}
                                            <span className='grid-fourth-level-comment-main'>
                                                <BiComment className='fourth-level-logo' onClick={() => {
                                                    navigate('/details/:'+content._id)
                                                }} />
                                            </span>
                                        {/* </span>  */}
                                        <span className="grid-fourth-level-total-like">{content.likes.length} Likes</span>
                                    </div>
                                </div>
                            ) : <div className='posts-no'>No post</div>}
                    </div>}
                {loading ? "" : <Pagination path="posts" page={page} count={count} perPage={perPage} />}
            </div>
        </>
    )
}

export default Posts