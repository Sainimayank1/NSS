import React, { useEffect, useState } from 'react'
import axios from "axios"
import './Card.css'
const Card = () => {
  let isTrue = true;
  const [count, setCount] = useState(0);

  const findDonated = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/donation/TotalCount");
      if (resp) {
        setCount(resp.data.count);
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isTrue = false
    findDonated();
  }, [isTrue]);
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
              <span className='date-event'>02-Feb-2023</span>
              <div>
                <a href="https://nss.gov.in/youth-affairs/topics-state-youth-parliament-festival-2023-english-and-hindi" className='link-event'>The Topics for State Youth Parliament Festival-2023 in English and Hindi</a>
              </div>
            </div>
            <div className='event-date-news'>
              <span className='date-event'>24-jan-2023</span>
              <div>
                <a href="https://nss.gov.in/topics-district-youth-parliament-festival-2023-english-and-hindi" className='link-event'>The Topics for District Youth Parliament Festival-2023 in English and Hindi</a>
              </div>
            </div>
            <div className='event-date-news'>
              <span className='date-event'>23-jan-2023</span>
              <div>
                <a href="https://nss.gov.in/national-youth-parliament-festival-nypf-2023-guidelines" className='link-event'>National Youth Parliament Festival (NYPF), 2023 Guidelines</a>
              </div>
            </div>
            <div className='event-date-news'>
              <span className='date-event'>08-july-2022</span>
              <div>
                <a href="https://nss.gov.in/activity-report-during-covid-19-nss-volunteers" className='link-event'>Activity Report During Covid-19 by NSS volunteers</a>
              </div>
            </div>
            <div className='event-date-news'>
              <span className='date-event'>12-may-2023</span>
              <div>
                <a href="https://nss.gov.in/national-youth-policy-0" className='link-event'>National Youth Policy</a>
              </div>
            </div>
            {/* <div className='event-date-news'>
        <span className='date-event'>12-2-2023</span>
        <div>
          <a href=''>google.com (youth red cross society) and national service scheme</a>
        </div>
       </div> */}
          </marquee>
          {/* </div> */}
        </div>
        <div className="content">
          <h4 className="card-contents">UPCOMING-EVENTS</h4>
          <div className='content-second'>
            <span className='date-event'>29-March-2023</span>
            <div>
              <a href="#">Blood Donation Mela In Jmieti</a>
              <img src='./picture/m1.jpg' alt='logo' className='up-img'></img>
              <div className='regisetered-p'>Total number of online Registration: 150<br></br>
                Total number of offline registration: 100<br></br>
                Total Donated:{count}</div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className='teacher-main'>
            <span className='tc'>Teacher-Incharge</span>
          </div>
          <div className='first-img'>
            <h4 className='fspan'>
              <img src='./picture/tk.png' alt='photo' className='t1-img' align='right'></img>
              Mr.Tajinder Kumar
            </h4>
            <h3 className='fspan2'>Assistant Professor.</h3>
            <p className='fspan3'>(Nss-Incharge)</p>
          </div>
          <div className='first-img'>
            <h4 className='fspan'>
              <img src='./picture/n3.png' alt='photo' className='t2-img' align='right'></img>
              Dr.Niti Sakhuja
            </h4>
            <h3 className='fspan2'>Assistant Professor.</h3>
            <p className='fspan4'>(Red Cross Society-Incharge)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
