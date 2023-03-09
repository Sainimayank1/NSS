import React from 'react'
import './Gallery.css';
import SimpleImageSlider from "react-simple-image-slider";


const Gallery = () => {
  return (
   <>
    <div className='heading'>
        <h3>Gallery Section</h3>
    </div>
     <div className='main1-container'>
    <div className='first-div'>
    <img src='./picture/g1.jpg' alt='photo' />
    </div>
     <div className='second-div'>
     <img src='./picture/g2.jpg' alt='photo'></img>
    </div>
    </div>
    
   </>
  )
}

export default Gallery