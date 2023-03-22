import React from 'react'
import './contact.css'
import mayank from './mayank.jpeg'
import manu from './manu.jpeg'
import mridul from './mridul.jpeg'

function Contact() {
  return (
    <div class="pro-area">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                            <div class="img2"><img src={mayank} alt=""/></div> 
                                <div class="main">
                                    <h2>Manu Kumar Pal</h2>
                                    <h3>Mern stack Developer</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos consequuntur fugit consectetur aliquam. Rem, neque perspiciatis. Esse odio voluptatum placeat! Magni, deserunt!</p>
                                </div>
                                <div class="social-icon">
                                    <i class="fa-brands fa-square-facebook"></i>
                                    <i class="fa-brands fa-square-instagram"></i>
                                    <i class="fa-brands fa-square-twitter"></i>
                                    <i class="fa-brands fa-linkedin"></i>
                                </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                            <div class="img2"><img src={manu} alt=""/></div>
                                <div class="main">
                                        <h2>Mayank Saini </h2>
                                        <h3>Mern Stack Developer</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos consequuntur fugit consectetur aliquam. Rem, neque perspiciatis. Esse odio voluptatum placeat! Magni, deserunt!</p>
                                </div>
                                <div class="social-icon">
                                        <i class="fa-brands fa-square-facebook"></i>
                                        <i class="fa-brands fa-square-instagram"></i>
                                        <i class="fa-brands fa-square-twitter"></i>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                    </div>
                </div>
                    <div class="col-md-4">
                        <div class="card">
                                <div class="img2"><img src={mridul} alt=""/></div>
                                    <div class="main">
                                         <h2>Person Three</h2>
                                         <h3>Unknown Developer</h3>
                                         {/* <div class="wrapper">
                                            <div class="static-txt">I'm a</div>
                                            <ul class="dynamic-txts">
                                              <li><span>YouTuber</span></li>
                                              <li><span>Designer</span></li>
                                              <li><span>Developer</span></li>
                                              <li><span>Freelancer</span></li>
                                            </ul>
                                          </div>  */}
                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos consequuntur fugit consectetur aliquam. Rem, neque perspiciatis. Esse odio voluptatum placeat! Magni, deserunt!</p>
                                         </div>
                                         <div class="social-icon">
                                            <i class="fa-brands fa-square-facebook"></i>
                                            <i class="fa-brands fa-square-instagram"></i>
                                            <i class="fa-brands fa-square-twitter"></i>
                                            <i class="fa-brands fa-linkedin"></i>
                                 </div>
                           </div>
                       </div>

                    </div>
                </div>
            </div>
  )
}

export default Contact