import React from "react";
import { Carousel } from 'react-bootstrap';
import "./mycarausel.css"

function MyCarousel(){
    return(
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-199"
            src='./images/nss1.jpg' alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-199"
            src='./images/nss2.jpg' alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-199"
            src='./images/nss3.png' alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    )
}
export default MyCarousel