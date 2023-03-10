import React from 'react'
import { useSelector } from 'react-redux'
import moment from "moment";
import LoGo from "./profile-user.png"
import "./style.css";

function Comments() {
  const { details } = useSelector(state => state.PostReducer);
  const { loading } = useSelector(state => state.authReducer);
  const {comment} = details
  return (
    <div className='main-comment'>
      {comment.length > 0 ?
        comment.map((data) =>
          <div className='comment-smaller'>
            <div className='comment-avatar'>
              <img src={LoGo}></img>
              <span className='comment-avatar-name'>
                {data.userName}
              </span>
              <span className='comment-avatar-date'>
              {moment(data.createdAt).format("MMM Do YY")}
              </span>
            </div>
            <div>
              <div className='comment-box'>
                {data.comment}
              </div>
            </div>
          </div>)
        : <div>No Comment</div>}
    </div>
  )
}

export default Comments