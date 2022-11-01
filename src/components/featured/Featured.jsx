import React from 'react'
import './Featured.css'
import pic1 from '../../images/pic1.jpg'
import pic2 from '../../images/pic2.jpg'
import pic3 from '../../images/pic3.jpg'
const Featured = () => {
  return (
    <div className="featured">
        <div className="f-items">
            <div className="f-item">
            <img className='f-pic' src={pic1} alt="" />
            <div className="f-title">
                <h1>Dublin</h1>
                <h2>125 Properties</h2>
            </div>
            
            </div>
            <div className="f-item">
            <img className='f-pic' src={pic2} alt="" />
            <div className="f-title">
                <h1>Austin</h1>
                <h2>125 Properties</h2>
            </div>
            
            </div>
            <div className="f-item">
            <img className='f-pic' src={pic3} alt="" />
            <div className="f-title">
                <h1>Reno</h1>
                <h2>125 Properties</h2>
            </div>
            
            </div>

        </div>
    </div>
  )
}

export default Featured