import React from 'react'
import Logo from './img/003 (2) 1.png'
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div>
                    <img src={Logo} alt='log' />
                </div>
                <div className='NavbarMenu'>
                    <ul>
                        <li>
                            <a href="#" className="activ" style={{ color: '#915DFF' }}>BIZ HAQIMIZDA</a>
                        </li>
                        <li>
                            <a href="#">SMM TARIF</a>
                        </li>
                        <li>
                            <a href="#">PORTFOLIO</a>
                        </li>
                        <li>
                            <a href="#">BIZ BILAN ALOQA</a>
                        </li>
                    </ul>
                </div>
                <div class="icon">
                    <span className="number"><i className="fa-solid fa-phone"></i>+998 99-725-67-75
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-telegram"></i></span>
                </div>
            </div>
            <hr/>
        </div>
        
    )
}

export default Navbar
