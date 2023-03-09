import React from 'react'
import './Gallery.css';
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
   <>
    <div className='heading'>
        <h3>Gallery Section</h3>
    </div>
     <div className='main1-container'>
    <div className='first-div'>
    <Link to="/posts">
    <img src='./picture/g1.jpg' alt='photo' />
    </Link>
    </div>
     <div className='second-div'>
     <Link to="/posts">
     <img src='./picture/g2.jpg' alt='photo'></img>
    </Link>
    </div>
    </div>
    
   </>
  )
}

export default Gallery