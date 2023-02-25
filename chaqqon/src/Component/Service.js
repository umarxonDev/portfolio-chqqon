import React from 'react'
import './Service.css'
import Vector from './img/Vector 12.png'

const Service = () => {
    return (
        <div>
            <div className="ServicesTitle">
                <p className="ServicesTitleText">BIZNING  <span style={{ color: '#ffff', paddingLeft: '10px' }}>XIZMATLAR</span></p>
            </div>
            <div className='ServicesOne'>
                <div>
                    <div className='Services'>
                        <div className='VectorDiv'>
                            <p>Project Manager</p>
                            <span className='vector'><img src={Vector} alt='vector' /></span>
                        </div>
                        <hr />
                    </div>
                    <div className='Services'>
                        <div className='VectorDiv'>
                            <p>Targetolog</p>
                            <span className='vector'><img src={Vector} alt='vector' /></span>
                        </div>
                        <hr />
                    </div>
                    <div className='Services'>
                        <div className='VectorDiv'>
                            <p>Graphic and Motion designer</p>
                            <span className='vector'><img src={Vector} alt='vector' /></span>
                        </div>
                        <hr />
                    </div>
                </div>
                <div>
                    <div className='Services'>
                        <div className='VectorDiv'>
                            <p>Copywriter</p>
                            <span className='vector'><img src={Vector} alt='vector' /></span>
                        </div>
                        <hr />
                    </div>
                    <div className='Services'>
                        <div className='VectorDiv'>
                            <p>Marketolog</p>
                            <span className='vector'><img src={Vector} alt='vector' /></span>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
