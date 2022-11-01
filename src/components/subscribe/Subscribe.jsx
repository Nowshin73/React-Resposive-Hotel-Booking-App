import React from 'react'
import './Subscribe.css'
const Subscribe = () => {
  return (
    <div className="subscribe">
    <div className="subscribe1">
        <div className="sub-left">
         <div className="sub-heading">
            <h1>Save time, save money!</h1>
            <p>Sign up and we'll send the best deals to you</p>
         </div>
         <div className="sub-subscribe">
            <div className="subinbtn">
                <input type="email" className='subinput' placeholder='Your email'required/>
                <button className="sub-btn">
                    Subscribe
                </button>
            </div>
            <div className="sub-check">
                <input type="checkbox"/><span>Send me a link to get the FREE Booking.com app!</span>
                </div>
         </div>
        </div>
        </div>
         <div className="subscribe2">
        <div className="sub-right">
              <div className='subrdiv-btn'>
                <button className="subr-btn">List your property</button>
                </div>
              <ul className='subr-links'>
                <li className='h-link'>  Stays</li>
                <li className='h-link'>Flights</li>
                <li className='h-link'> Car rentals</li>
                <li className='h-link'> Attractions</li>
                <li className='h-link'> Airport taxis</li>
             </ul>
        </div>
    </div>
    </div>
    
  )
}

export default Subscribe