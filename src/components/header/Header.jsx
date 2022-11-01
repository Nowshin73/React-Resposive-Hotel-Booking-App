import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faTaxi } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from 'react'
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom'
const Header = ({type}) => {

    const [destination, setDestination] = new useState("");
    const [openDate, setOpenDate] = new useState(false);
    const [date, setDate] = useState([ 
        { 
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = new useState(false);
    const [options, setoptions] = useState(
        {
            adult: 1,
            children: 0,
            room: 1
        }
    );
    const handleOption = (name, operation) => {
        setoptions((prev) => {
            return {
                ...prev,
                [name]: operation == "i"? options[name] + 1 : options[name] - 1,
            }
        });
    };
    const navigate = useNavigate();
    const handlesearch = ()=>{
        navigate("/hotels", {state:{destination,date,options}});
    }

    return (
        <div className="header">
            <ul className='h-links'>
                <li className='h-link active'><FontAwesomeIcon icon={faBed} />  Stays</li>
                <li className='h-link'><FontAwesomeIcon icon={faPlane} /> Flights</li>
                <li className='h-link'><FontAwesomeIcon icon={faCar} /> Car rentals</li>
                <li className='h-link'><FontAwesomeIcon icon={faBed} /> Attractions</li>
                <li className='h-link'><FontAwesomeIcon icon={faTaxi} /> Airport taxis</li>
            </ul>
           { type != "list" &&
            <>  <div className="h-desc">
                <span>A lifetime of discounts? It's Genius.</span>
                <span>Get rewarded for your travels - unlock instant savings of 10% or mor with a free Booking.com account</span><br />
                <div className="hd-btn ">
                    <button className="header-btn">Sign in/ Register</button>
                </div>
            </div>
            <div className="h-search">
                <div className="hs-item">
                    <FontAwesomeIcon icon={faBed} />
                    <input type="text" className='hs-input' placeholder='Where are you going?' onChange={(e)=> setDestination(e.target.value)} />
                </div>
                <div className="hs-item ">
                    <div className="date-range">

                    </div>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyy")} to ${format(date[0].endDate,"MM/dd/yyy")}`} </span>
                    {openDate &&  <div className="date-range">
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='date'
                        minDate={new Date()}
                    />
                    </div>}
                </div>
                <div className="hs-item">
                    <FontAwesomeIcon icon={faPerson} />
                    <span onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span><br/><br />
                    {openOptions && <div className='options'>
                    <div className="option">
                        <div className="o-item">
                               <span className="o-txt">Adult</span>
                               <button disabled={options.adult <= 1} className="o-btn" onClick={()=>handleOption("adult", "d")}>-</button>
                               <span className="o-num">{options.adult}</span>
                               <button className="o-btn"  onClick={()=>handleOption("adult", "i")}>+</button>
                        </div>
                    </div>
                    <div className="option">
                        <div className="o-item">
                               <span className="o-txt">Children</span>
                               <button disabled={options.children <= 1} className="o-btn"  onClick={()=>handleOption("children", "d")}>-</button>
                               <span className="o-num">{options.children}</span>
                               <button className="o-btn"  onClick={()=>handleOption("children", "i")}>+</button>
                        </div>
                    </div>
                    <div className="option">
                        <div className="o-item">
                               <span className="o-txt">Room</span>
                               <button disabled={options.room <= 1} className="o-btn"  onClick={()=>handleOption("room", "d")}>-</button>
                               <span className="o-num">{options.room}</span>
                               <button className="o-btn"  onClick={()=>handleOption("room", "i")}>+</button>
                        </div>
                    </div>
                    </div> }
                </div>
               
                    <button className="hs-item header-btn search-btn" onClick={handlesearch}>Search</button>
            
            </div></>}
        </div>
    )
}

export default Header