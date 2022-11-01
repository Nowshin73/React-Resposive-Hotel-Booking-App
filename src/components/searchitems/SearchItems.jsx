import React from 'react'
import './SearchItems.css'
import pic4 from '../../images/pic4.webp'
const SearchItems = () => {
    return (
        <div className="searchitems">
            <div className="searchitem-container">
                <img className='si-img' src={pic4} alt="" />
                <div className="si-desc">
                    <div className="si-title">
                        <h1>Tower street Apartments</h1>
                    </div>
                    <span className="si-ditance">500m from center</span>
                    <span className="siTaxiOp">Free airport taxi</span>
                    <span className="si-subtitle">Studio Apartment with Air conditioning</span>
                    <span className="si-features">
                        Entire studio + 1 bathroom + 21m square 1 full bed
                    </span>
                    <span className="si-cancelop">Free cancallation</span>
                    <span className="sico-subtitle">You can cancel later, so lock in this great price today!</span>
                </div>
                <div className="si-details">
                    <div className="si-rating">
                        <h3>Excellent</h3>
                       <div className="sirate">
                       <span>8.9</span>
                       </div>
                    </div>
                    <div className="sid-txts">
                        <span>$125</span>
                        <span>Includes taxes and fees</span>
                        <button>See availability</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchItems