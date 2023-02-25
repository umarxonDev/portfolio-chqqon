import React from 'react'
import './About.css'
import star2 from './img/Star 2.png'
import rasm2 from './img/image 5 (1).png'


const About = () => {
  return (
    <div className="AboutUs">
        <div className="AboutUsTitle">
            <div>
                <img src={star2} alt="star"/>
            </div>
            <div className="AboutUsImg">
                <img src={rasm2} alt=""/>
            </div>
            <div className="AboutUsText">
                <h1>BIZ</h1>
                <h1>HAQIMIZDA</h1>
                <p>SMM borasida 4 yil davomida mijozlarga xizmat ko’rsatib kelmoqdamiz. Har bir mijozning biznes
                    sahifasini 0 dan boshlab to sotuv darajasiga yetkunga qadar bor kuchimiz bilan yondoshamiz. Sotuv
                    rejalari tuzish, bozorni taxlil qilish va strategiya tuzib, mijoz auditoryasining mehrini qozonishda
                    davom etmoqdamiz. <br/><br/>
                    Bizning jamoa o’z ishining ustalarini o’z ichiga oladi. Ular har bir mijoz talabiga binoan o’zgacha
                    yondoshuv bilan ish olib boradi. Bu esa raqiblardan ustunlik bir qadam oldinda yurishiga yordam
                    beradi.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
