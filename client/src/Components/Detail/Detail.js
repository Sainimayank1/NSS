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
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Comments from '../Comment/Comment';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import postComment from "../../Store/AsyncMethods/PostCommentMethod.js";

function Details() {
  const navigate  = useNavigate();
  let { id } = useParams();
  const [comment, setComment] = useState("")
  const dispatch = useDispatch();
  const { loading, user ,token } = useSelector(state => state.authReducer)
  const { details } = useSelector(state => state.PostReducer)
  let isTrue = true;
  const [isLike, setlike] = useState(false);
  const [isDislike, setDislike] = useState(false);
  const _id = user._id;

  const submitComment = (e) => {
    // e.preventDefault();
    // dispatch(postComment({postId:details._id,comment,userName:user.name}))
    // dispatch(fetchdetails(id));
    // setComment("");
  }

  useEffect(() => {
    id = id.split(':')[1];
    dispatch(fetchdetails(id));
  }, [id  , isLike  , isDislike])

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
            if (_id.cmp(element)) {
                setlike(true)
            }
        })
        const props = prop._id;
        const sendData = { props, _id }
        if (!isLike) {
            const response = await axios.post('http://localhost:5000/post/like', sendData, config);
            setlike(true)
        }
    } catch (error) {
        dispatch(fetchdetails(id))
    }
}

const HandleDislike = async (prop) => {
    try {
        const config =
        {
            headers: {
                Authorizaton: 'Bearer ' + token
            }
        }
        setDislike(false)
        const props = prop._id;
        const sendData = { props, _id }
        const response = await axios.post('http://localhost:5000/post/dislike', sendData, config);
        setDislike(true);
        dispatch(fetchdetails(id))
        dispatch({ type: "CLOSE_LOADER" })
    } catch (error) {
        dispatch(fetchdetails(id))
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
        <div className='home-smaller'>
            <div className='home-items'>
              <div className='home-left'>
                <div className='avatar'>
                  <div className='avatar-right'>
                    <span className='grid-logo'><img src={LoGO} className="img-container"></img></span>
                    <span className='detail-username'>{details.userName}</span>
                    <span className='detail-date'>{moment(details.updatedAt).format("MMM Do YY")}</span>
                  </div>
                </div>
                <div className='detail-title'>
                  {details.title}
                </div>
                <div className='detail-desc'>
                  {details.description}
                </div>
              </div>
              <div className='detail-right'>
                <img className='detail-right-image' src={details.image.url}></img>
              </div>
              <div className={user ? 'grid-fourth-level' : 'hidden'}>
                <span className='grid-fourth-level-like-main'>
                  <AiOutlineLike className='fourth-level-logo' onClick={() => { HandleLike(details) }} />
                  <span className='grid-fourth-level-dislike-main'>
                    <AiOutlineDislike className='fourth-level-logo' onClick={() => { HandleDislike(details) }} />
                  </span>
                </span>
                <span className="grid-fourth-level-total-like">{details.likes.length} Likes</span>
              </div>
            </div>
            <div className='detail-form'>
            <form>
              <input type='text' className='detail-inp ' onChange={(e) => setComment(e.target.value)} value={comment} placeholder='Enter Comment.'></input>
              <input type='submit' onClick={submitComment} value="Submit" className='submit-detail'></input>
            </form>
            <Comments />
          </div>
        </div>}
      </div>
    </>
  )
}

export default Details