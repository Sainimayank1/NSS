import React from 'react'
import './style.css'
import param from './Param.png'
import maha from "./Mahavir.png"
import vir from "./Vir.png"
import ashoka from "./Ashoka.png"
import kirti from "./kriti.png"
import shourya from './sc.png'
import left from './left_head.png'
import right from './right_head.png'

function Awards() {
    return (
        <div className='awards-main'>
            <div className='awards-upper'>
                <img src={left}></img>
                <span className='span-orange'>GALLANTRY</span><span>AWARDS</span>
                <img src={right}></img>
            </div>
            <div className='awards-sub-1'>
            <div className='awards-sub'>
                    <img src={param}></img>
                    <a href='https://www.gallantryawards.gov.in/awards?search=8'>21</a>
                    <p>Param Vir Chakra</p>
            </div>
            <div className='awards-sub'>
                <img src={maha}></img>
                <a href='https://www.gallantryawards.gov.in/awards?search=9'>213</a>
                <p>Maha Vir Chakra</p>

            </div>
            <div className='awards-sub'>
                <img src={vir}></img>
                <a href='https://www.gallantryawards.gov.in/awards?search=10'>1329</a>
                <p>Vir Chakra</p>

            </div>
            <div className='awards-sub'>
                <img src={ashoka}></img>
                <a href='https://www.gallantryawards.gov.in/awards?search=11'>97</a>
                <p>Ashoka Chakra</p>
            </div>
            <div className='awards-sub'>
                <img src={kirti}></img>
                <a href='https://www.gallantryawards.gov.in/awards?search=12'>486</a>
                <p>Kirti Chakra</p>
            </div>
            <div className='awards-sub'>
                <img src={shourya}></img>
                <a href='https://www.gallantryawards.gov.in/awards?search=13'>2122</a>
                <p>Shaurya Chakra</p>
            </div>
            </div>
            <a href='https://www.gallantryawards.gov.in/awards' className='awards-sub-a'>Awardees</a>
        </div>
    )
}

export default Awards

