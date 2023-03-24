import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
const footer = () => {
  return (
    <>
      <div className='top_footer bg-blue'>
        <p>
          <Link to="/">
            Home
          </Link>
          |
          <Link to="/feedback">
            Feedback
          </Link>
          |
          <Link to="/contact">
            Developer-Info
          </Link>
        </p>
      </div>
      <div className='bottom_footer'>
        <h3>Follow Us</h3>
        <div className='icon-main'>
          <div className='icons'>
            <a href="#f"
              className="youtube social">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.facebook.com/jmietiinstitute/"
              className="facebook social">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/jmietiradaur?lang=en" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/jmietiofficial/?hl=en"
              className="instagram social">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className='main-para'>
          <div className='para'>
            <p>@Copyrights NSS Jmieti | ALL rights Reserved</p>
          </div>
        </div>
      </div>
    </>

  );
}

export default footer;
