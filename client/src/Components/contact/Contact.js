import React from 'react'
import './contact.css'
import mayank from './mayank.jpeg'
import manu from './manu.jpeg'
import mridul from './mridul.jpeg'
import fluuter from './flutter.png'
import mern from './mern.png'
import linkedin from "./linked.webp"

function Contact() {
    return (
        <div class="pro-area">
            <div class="container-contact">
                <div class="row contact-row">
                    <div class="col-md-4">
                        <div class="card-contact">
                            <div class="img2"><img src={mayank} alt="" /></div>
                            <div class="main-contact">
                                <h2>Mayank Saini </h2>
                                <h4>(Mern stack Developer)</h4>
                                <h6>Builded: Web Version of NSS</h6>
                                <img src={mern}></img>
                            </div>
                            <div className='contact-follow'>
                                <div>Follow Us On :</div>
                                <a href="https://www.linkedin.com/in/mayank-7a90b2178/"><img src={linkedin} className="
contact-follow-img"></img></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card-contact">
                            <div class="img2"><img src={manu} alt="" /></div>
                            <div class="main-contact">
                                <h2>Manu Kumar Pal</h2>
                                <h4>(Mern stack Developer)</h4>
                                <h6>Builded: Web Version of NSS</h6>
                                <img src={mern}></img>
                            </div>
                            <div className='contact-follow'>
                                <div>Follow Us On :</div>
                                <a href='https://www.linkedin.com/in/manu-kumar-pal-28197a220/'><img src={linkedin} className="
contact-follow-img"></img></a>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-4 align-center">
                        <div class="card-contact">
                            <div class="img2"><img src={mridul} alt="" /></div>
                            <div class="main-contact">
                                <h2>Mridul Vij</h2>
                                <h4>(Flutter Developer)</h4>
                                <h6>Builded: App Version of NSS</h6>
                                <img src={fluuter}></img>
                            </div>
                            <div className='contact-follow'>
                                <div>Follow Us On :</div>
                                <a href='https://www.linkedin.com/in/mridul-vij-31969b160/'><img src={linkedin} className="
contact-follow-img"></img></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact