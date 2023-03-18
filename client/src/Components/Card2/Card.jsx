import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <>
        <div className='main-card-section'>
        <div className="content">
        <h4 className="card-contents">NOTIFICATIONS</h4>
        <marquee
        behavior="scroll"
        direction="up"
        scrollamount="3"
        onmouseover="this.setAttribute('scrollamount',0,0);this.stop();"
        onmouseout="this.setAttribute('scrollamount',8,0);this.start();"
        className="movingbody">
       <div className='event-date-news'>
        <span className='date-event'>12-2-2023</span>
        <div>
          <a href=''>google.com (youth red cross society) and national service scheme</a>
        </div>
       </div>
       <div className='event-date-news'>
        <span className='date-event'>12-2-2023</span>
        <div>
          <a href=''>google.com (youth red cross society) and national service scheme</a>
        </div>
       </div>
       <div className='event-date-news'>
        <span className='date-event'>12-2-2023</span>
        <div>
          <a href=''>google.com (youth red cross society) and national service scheme</a>
        </div>
       </div>
       <div className='event-date-news'>
        <span className='date-event'>12-2-2023</span>
        <div>
          <a href=''>google.com (youth red cross society) and national service scheme</a>
        </div>
       </div>
       <div className='event-date-news'>
        <span className='date-event'>12-2-2023</span>
        <div>
          <a href=''>google.com (youth red cross society) and national service scheme</a>
        </div>
       </div>
       <div className='event-date-news'>
        <span className='date-event'>12-2-2023</span>
        <div>
          <a href=''>google.com (youth red cross society) and national service scheme</a>
        </div>
       </div>
      </marquee>
    {/* </div> */}
    </div>
    <div className="content">
        <h4 className="card-contents">UPCOMING-EVENTS</h4>
    </div>
    <div className="content">
        <div className='teacher-main'>
          <span>Teacher Co-ordinator</span>
        </div>
        <div className='first-img'>
        <div>
       <h4 className='fspan'>
          Mr.Tajinder Kumar 
          Assistant Professor.
       </h4>
        </div>
        <div className='img-t1'>
        <img src='./picture/t1.png' alt='photo' className='t1-img' align='right'></img>
        </div>
        </div>
        <div className='second-img'>
        <div>
        <h4 className='fspan'>
          Mr.Tajinder Kumar 
          Assistant Professor.
       </h4>
        </div>
        <div className='img-t1'>
        {/* <img src='./picture/t1.png' alt='photo' className='t1-img' align='right'></img> */}
        </div>
        </div>
    </div>
     </div>
    </>
  );
}

export default Card;
