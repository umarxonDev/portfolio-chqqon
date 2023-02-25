import React from 'react'
import './SocialMedia.css'
import Polygon from './img/Polygon 1.png'
import Star from './img/Star 1.png'
import Rasm from './img/Component 1 (1).png'

const SocialMedia = () => {
  return (
    <div className="socilaMedia">
  
        <div className="corner">
            <img className="plygon" src={Polygon} alt=""/>
            <div className="socilaMediaTitle">
                <p style={{color: '#915DFF'}}>SOCIAL</p>
                <p>MEDIA MARKETING</p>
                <img src={Rasm} alt=""/>
            </div>
            <img className="star" src={Star} alt=""/>
        </div>
    </div>
  )
}

export default SocialMedia
