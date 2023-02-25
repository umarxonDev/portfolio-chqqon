import React from 'react'
import './RatePlan.css'
import Phone from './img/phone.png'
import shadow from './img/Ellipse 75.png'
import galichka from './img/galichka.png'


const RatePplan = () => {
    return (
        <div>
            <div className="RatePplanTitle">
                <p className="RatePplanTitleText">YUKSALISH  <span style={{ color: '#ffff', paddingLeft: '10px' }}>TARIF REJASI</span></p>
                <p className='RatePplanText'>Ishni nimadan boshlashni bilmayapsizmi?</p>
            </div>
            <div className='RatePplanHeader'>
                <div>
                    <img src={shadow} alt='rasm' />
                    <img className='RatePplanHeaderImg' src={Phone} alt='rasim' />
                </div>
                <div>
                    <p><span><img src={galichka} alt='galichka'></img></span> Bozorni organish va strategiya tuzish</p> 
                    <p><span><img src={galichka} alt='galichka'></img></span> 12 ta JPG post 4 tasi sotuv post</p> 
                    <p><span><img src={galichka} alt='galichka'></img></span> 2 ta harakatli post (15-20 soniyalik motion)</p> 
                    <p><span><img src={galichka} alt='galichka'></img></span> Oyiga 1 marta Fotosessiya</p> 
                    <p><span><img src={galichka} alt='galichka'></img></span> Mobilagrafika ( haftasiga 1 marta)</p> 
                    <p><span><img src={galichka} alt='galichka'></img></span> 100 ta soglom qongiroqlar (Prognoz -200 ta)</p> 
                    <p><span><img src={galichka} alt='galichka'></img></span> Community menedjer (sahifalarda mijozlar bilan suxbat olib boradi)</p> 
                    <p><span><img src={galichka} alt='galichka'></img></span> Sahifalar Rus - Ozbek tillarida olib boriladi vaKunlik storislar qoyib boriladi</p> 
                    <button className='Button'>Aloqa uchun →</button>
                </div>
            </div>
        </div>
    )
}

export default RatePplan
