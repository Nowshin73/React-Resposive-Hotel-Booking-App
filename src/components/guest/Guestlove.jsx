import React from 'react'
import './Guestlove.css'
import pic9 from '../../images/pic9.jpg'
import pic10 from '../../images/pic10.jpg'
import pic6 from '../../images/pic6.webp'
import pic5 from '../../images/pic5.jpg'

const Guestlove = () => {
    return (
        <div className="guest-love">
            <div className="gl-wrapper">

            <div className='gl-hdiv' >
                <div className="gl-headline"><h2>Home Guest Love</h2></div>
            </div>
            <div className="gl-items">
                <div className="gl-item">
                    <img className='gl-pic' src={pic9} alt="" />
                    <div className="gl-title">
                        <h3>Hotels</h3>
                        <p>125 hotels</p>
                    </div>

                </div>
                <div className="gl-item">
                    <img className='gl-pic' src={pic6} alt="" />
                    <div className="gl-title">
                        <h3>Apartments</h3>
                        <p>1345 hotels</p>
                    </div>

                </div>
                <div className="gl-item">
                    <img className='gl-pic' src={pic5} alt="" />
                    <div className="gl-title">
                        <h3>Resorts</h3>
                        <p>1325 hotels</p>
                    </div>

                </div>
                <div className="gl-item">
                    <img className='gl-pic' src={pic10} alt="" />
                    <div className="gl-title">
                        <h3>Villas</h3>
                        <p>1325 hotels</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Guestlove