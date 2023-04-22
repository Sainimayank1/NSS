import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
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
                    <Link to="/paramvirChakra/1">21</Link>
                    <p>Param Vir Chakra</p>
            </div>
            <div className='awards-sub'>
                <img src={maha}></img>
                <Link to="/mahaVir/2">213</Link>
                <p>Maha Vir Chakra</p>

            </div>
            <div className='awards-sub'>
                <img src={vir}></img>
                <Link to="/virChakra/3">1329</Link>
                <p>Vir Chakra</p>

            </div>
            <div className='awards-sub'>
                <img src={ashoka}></img>
                <Link to="/ashokaChakra/4">97</Link>
                <p>Ashoka Chakra</p>
            </div>
            <div className='awards-sub'>
                <img src={kirti}></img>
                <Link to="/kirtiChakra/5">486</Link>
                <p>Kirti Chakra</p>
            </div>
            <div className='awards-sub'>
                <img src={shourya}></img>
                <Link to="/shauryaChakra/6">2122</Link>
                <p>Shaurya Chakra</p>
            </div>
            </div>
            <a href='https://www.gallantryawards.gov.in/awards' className='awards-sub-a'>Awardees</a>
        </div>
    )
}

export default Awards

