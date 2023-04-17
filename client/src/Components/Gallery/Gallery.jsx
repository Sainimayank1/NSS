import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Gallery.css';
import left from './left_head.png'
import right from './right_head.png'

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
    <div className='awards-upper'>
                <img src={left}></img>
                <span className='span-orange'>GALLERY</span><span>SECTION</span>
                <img src={right}></img>
            </div>
    <Carousel responsive={responsive}>
    {/* <a href=''><img src='./picture/updatedimage1.jpeg' alt='img' className='img-gallery' ></img></a> */}
    <a href=''><img src='./picture/updatedimage2.jpg' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p1.JPG' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p2.JPG' alt='img' className='img-gallery' ></img></a> 
    <a href=''><img src='./picture/p8.JPG' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p4.JPG' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p5.JPG' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p7.JPG' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p3.JPG' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p6.JPG' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p9.JPG' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p0.JPG' alt='img' className='img-gallery' ></img></a>
    <a href=''><img src='./picture/p11.jpeg' alt='img' className='img-gallery' ></img></a>
  </Carousel>
   </div>

    </>
    
  )
}

export default Gallery
