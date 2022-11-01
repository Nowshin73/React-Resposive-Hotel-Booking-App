import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Hotel.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Subscribe from '../../components/subscribe/Subscribe'
import pic5 from '../../images/pic5.jpg'
import pic7 from '../../images/pic7.jpg'
import pic9 from '../../images/pic9.jpg'
import pic10 from '../../images/pic10.jpg'
import { useState } from 'react'
const Hotel = () => {
  const photos = [pic5,pic7,pic9,pic10];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open,setOpen] = useState(false);
  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true)
  };
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === 'l'){
      newSlideNumber = slideNumber === 0? 3: slideNumber-1;
    }
    else {
      newSlideNumber = slideNumber === 0? 3: slideNumber+1;
    }
    setSlideNumber(newSlideNumber);
  }
  return (
    <div className="hotel">
      <Navbar/>
      <Header type="list"/>
      <div className="hotelcontainer">
        {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
            <div className="silder-wrapper">
              <img src={photos[slideNumber]} alt="" className='sliderimg'/>
            </div>
       
        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("l")}/>
        </div>
        }
        <div className="hotelup">
        <div className="hotel-wrapper">
          <h1 className="hotel-title">Grand hotel</h1>
         <span> <FontAwesomeIcon icon = {faLocationDot}/> Elton St 125 New york</span>
        <span>Excellent location 500m from center</span>
        <span className='hotelpricing'>Book a stay over $144 at this property and get a free airport taxi</span>
        </div>
        <div className="hotel-upbtn">
          <button className="upbtn">Reserve or Book Now!</button>
        </div>
        </div>
        <div className="hotelimages">
          {photos.map((photo,i)=>(
            <div className="hi-wrapper">
              <img onClick={()=>handleOpen(i)} src={photo} alt="" className='hotelimg'/>
            </div>
          ))}
        </div>
      <div className="hotelbottom">
      
        <div className="hb-left">
          <h1>Stay in the heart of Krakow</h1>
          <span>Located a 5-minute walk from St.
             Florida's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.
              The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV</span>
        </div>
        <div className="hb-right">
          <h1>Perfect for a 9-night stay!</h1>
          <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
          <span>$945 (9 nights)</span>
          <button className="upbtn bbtn">Reserve or Book Now!</button>
        </div>
        </div>
    
    </div>
    <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Hotel