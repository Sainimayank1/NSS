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
            Contact us
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
            <a href="#f"
              className="facebook social">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#f" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#f"
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
