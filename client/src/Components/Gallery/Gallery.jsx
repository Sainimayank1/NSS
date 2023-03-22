import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Gallery.css';

const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
    <div className='main-gallery'>
    <h3 className='h3g'>Gallery section</h3>
    <Carousel responsive={responsive}>
    <a href=''><img src='./picture/p1.jpg' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p2.jpg' alt='img' className='img-gallery' ></img></a> 
    <a href=''><img src='./picture/p8.jpg' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p4.jpg' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p5.jpg' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p7.jpg' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p3.jpg' alt='img' className='img-gallery' ></img></a>
  </Carousel>
   </div>

    </>
    
  )
}

export default Gallery
