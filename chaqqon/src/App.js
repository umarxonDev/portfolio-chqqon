import React from 'react'
import About from './Component/About'
import AboutNumber from './Component/AboutNumber'
import CardItem from './Component/CardItem'
import GoogleMap from './Component/Footer'
import Item from './Component/Item'
import Navbar from './Component/Navbar'
import Portfolio from './Component/Portfolio'
import RatePplan from './Component/RatePplan'
import Service from './Component/Service'
import SocialMedia from './Component/SocialMedia'

const App = () => {
  return (
    <div>
      <Navbar/>
      <SocialMedia/>
      <Item/>
      <About/>
      <AboutNumber/>
      <CardItem />
      <Service/>
      <RatePplan/>
      <Portfolio />
      <Navbar/>
      <GoogleMap/>
    </div>
  )
}

export default App
