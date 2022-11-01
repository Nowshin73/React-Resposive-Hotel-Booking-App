import React from 'react'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Guestlove from '../../components/guest/Guestlove'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PropertyType from '../../components/properytype/PropertyType'
import Subscribe from '../../components/subscribe/Subscribe'
import './Home.css'
const Home = () => {
  return (
    <div className="home">
        <div className="h-header">
          <Navbar />
          <Header/>
      </div>
      <div className="h-container">
        <Featured/>
        <PropertyType/>
        <Guestlove/>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home