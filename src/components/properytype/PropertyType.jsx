import React from 'react'
import './PropertyType.css'
import pic2 from '../../images/pic2.jpg'
import pic13 from '../../images/pic13.jpg'
import pic6 from '../../images/pic6.webp'
import pic7 from '../../images/pic7.jpg'
import pic8 from '../../images/pic8.jpg'
const PropertyType = () => {
  return (
    <div className="property-type">
       <div className="pt-wrapper">
        <div className="pt-headline">
            <h2>Browse by property type</h2>
        </div>
         <div className="pt-items">
            <div className="pt-item">
            <img className='pt-pic' src={pic6} alt="" />
            <div className="pt-title">
                <h3>Hotels</h3>
                <p>125 hotels</p>
            </div>
            
            </div>
            <div className="pt-item">
            <img className='pt-pic' src={pic7} alt="" />
            <div className="pt-title">
            <h3>Apartments</h3>
                <p>1345 hotels</p>
            </div>
            
            </div>
            <div className="pt-item">
            <img className='pt-pic' src={pic8} alt="" />
            <div className="pt-title">
            <h3>Resorts</h3>
                <p>1325 hotels</p>
            </div>
            
            </div>
            <div className="pt-item">
            <img className='pt-pic' src={pic2} alt="" />
            <div className="pt-title">
            <h3>Villas</h3>
                <p>1325 hotels</p>
            </div>
            
            </div>
            <div className="pt-item">
            <img className='pt-pic' src={pic13} alt="" />
            <div className="pt-title">
            <h3>Cabins</h3>
                <p>1325 hotels</p>
            </div>
            
            </div>

        </div>
       </div>
    </div>
  )
}

export default PropertyType