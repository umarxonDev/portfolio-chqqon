import React from 'react'
import './CardItem.css'
import rasim3 from './img/21-avatar-outline 1.png'
import rasim4 from './img/153-bar-chart-growth-outline 1.png'
import rasim5 from './img/20-love-heart-outline 1.png'
import rasim6 from './img/298-coins-outline 1.png'


const CardItem = () => {
  return (
    <div>
          <section className="CardItem">
        <div className="CaardItemTitle">
            <p className="CaardItemTitleText">BIZNESINGIZGA</p>
            <p className="CaardItemTitleText" style={{color: '#ffff'}}>NIMA BERA OLAMIZ?</p>
        </div>
        <div className="HeadeCard container">
            <div className="CardItemiconText">
                <div className="CardIcon">
                    <img src={rasim3} alt=""/>
                </div>
                <div className="CradText">
                    <p>Jonli obunachilar sonini oshirish ular bilan ishlash aloqa qilish va mahsulotingizga qiziqishini
                        ortirish</p>
                </div>
            </div>
            <div className="CardItemiconText">
                <div className="CardIcon">
                    <img src={rasim4} alt=""/>
                </div>
                <div className="CradText">
                    <p>Jonli obunachilar sonini oshirish ular bilan ishlash aloqa qilish va mahsulotingizga qiziqishini
                        ortirish</p>
                </div>
            </div>
            <div className="CardItemiconText">
                <div className="CardIcon">
                    <img src={rasim5} alt=""/>
                </div>
                <div className="CradText">
                    <p>Jonli obunachilar sonini oshirish ular bilan ishlash aloqa qilish va mahsulotingizga qiziqishini
                        ortirish</p>
                </div>
            </div>
            <div className="CardItemiconText">
                <div className="CardIcon">
                    <img src={rasim6} alt=""/>
                </div>
                <div className="CradText">
                    <p>Jonli obunachilar sonini oshirish ular bilan ishlash aloqa qilish va mahsulotingizga qiziqishini
                        ortirish</p>
                </div>
            </div>
        </div>

    </section>
    </div>
  )
}

export default CardItem
