import React from 'react'
import './portfolio.css'
import rasm76 from './img/Rectangle 76.png'
import rasm77 from './img/Rectangle 77.png'
import rasm78 from './img/Rectangle 78.png'
import rasm81 from './img/Rectangle 81.png'
import rasm82 from './img/Rectangle 82.png'
import rasm83 from './img/Rectangle 83.png'

const Portfolio = () => {
    return (
        <div>
            <div className="RatePplanTitle">
                <p className="RatePplanTitleText">YUKSALISH  <span style={{ color: '#ffff', paddingLeft: '10px' }}>TARIF REJASI</span></p>
                <p className='RatePplanText'>Ishni nimadan boshlashni bilmayapsizmi?</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src={rasm76} alt='rasm76' />
                    </div>
                    <div class="col">
                        <img src={rasm77} alt='rasm76' />
                    </div>
                    <div class="col">
                        <img src={rasm78} alt='rasm76' />
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <img src={rasm81} alt='rasm76' />
                    </div>
                    <div class="col">
                        <img src={rasm82} alt='rasm76' />
                    </div>
                    <div class="col">
                        <img src={rasm83} alt='rasm76' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
