import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from "moment";
import Loading from '../Loader/Loading';
import fetchdetails from "../../Store/AsyncMethods/detailsMethod"
import "./style.css"
import LoGO from "./profile-user.png"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Comments from '../Comment/Comment';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import postComment from "../../Store/AsyncMethods/PostCommentMethod.js";
import VedioPlayer from "../VedioPlayer/VideoPlayer.js"

function Details() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [comment, setComment] = useState("")
  const dispatch = useDispatch();
  const { loading, user, token } = useSelector(state => state.authReducer)
  const { details } = useSelector(state => state.PostReducer)
  let isTrue = true;
  const [isClick, setCLick] = useState(false);
  const _id = user._id;
  id = id.split(':')[1];

  const submitComment = (e) => {
    e.preventDefault();
    dispatch(postComment({ postId: details.data._id, comment, userName: user.name }))
    dispatch(fetchdetails(id));
    setComment("");
  }

  useEffect(() => {
    dispatch(fetchdetails(id));
    details.data.likes.map((element)=>
    {
      if(element === _id)
      {
        setCLick(true)
      }
    })
    isTrue = false
  }, [isTrue])

  const handleClick = async (prop) => {
    if (!isClick) {
      try {
        const config =
        {
          headers: {
            Authorizaton: 'Bearer ' + token
          }
        }

        const props = id;
        const sendData = { props, _id }
        setCLick(true)
        const response = await axios.post('/post/like', sendData, config);
        dispatch(fetchdetails(id))

      } catch (error) {
        dispatch(fetchdetails(id))
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
        const props = id;
        const sendData = { props, _id }
        setCLick(false)
        const response = await axios.post('/post/dislike', sendData, config);
        dispatch(fetchdetails(id))
      } catch (error) {
        dispatch(fetchdetails(id))
      }
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{details.title}</title>
      </Helmet>
      <div className='home-container'>
        {loading ? <Loading /> :
          details ? 
          <div className='home-smaller'>
            <div className='home-items'>
              <div className='home-left'>
                <div className='avatar'>
                  <div className='avatar-right'>
                    <span className='grid-logo'><img src={LoGO} alt="image" className="img-container"></img></span>
                    <span className='detail-username'>{details.data.userName}</span>
                    <span className='detail-date'>{moment(details.data.createdAt).format("MMM Do YY")}</span>
                  </div>
                </div>
                <div className='detail-title'>
                  {details.data.title}
                </div>
                <div className='detail-desc'>
                  {details.data.description}
                </div>
              </div>
              <div className='detail-right'>
                <img className='detail-right-image' src={ details.data.image.url}></img>
                {details.data.vedio.url === ' ' ? '' : <VedioPlayer className="vedio-player" src={details.data.vedio.url} thumbnail={details.data.vedio.thumbnail_url}/>}
              </div>
              <div className={user ? 'grid-fourth-level' : 'hidden'}>
                <span className='grid-fourth-level-like-main'>
                  {isClick ?
                    <AiFillHeart className='fourth-level-logo' onClick={() => { handleClick(details) }} />
                    :
                    <AiOutlineHeart className='fourth-level-logo' onClick={() => { handleClick(details) }} />
                  }
                </span>
                <span className="grid-fourth-level-total-like">{details.data.likes.length} Likes</span>
              </div>
            </div>
            <div className='detail-form'>
              {user ? <form>
                <input type='text' className='detail-inp ' onChange={(e) => setComment(e.target.value)} value={comment} placeholder='Enter Comment.'></input>
                <input type='submit' onClick={submitComment} value="Submit" className='submit-detail'></input>
              </form> : ""}
              <Comments />
            </div>
          </div> : <Loading/>}
      </div>
    </>
  )
}

export default Details