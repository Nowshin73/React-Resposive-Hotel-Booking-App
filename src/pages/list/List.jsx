import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './List.css'
import { DateRange } from 'react-date-range';
import { useState } from 'react'
import {format} from 'date-fns'
import { useLocation} from 'react-router-dom'
import SearchItems from '../../components/searchitems/SearchItems';

const List = () => {
  const location = useLocation();
  const [destination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options] = useState(location.state.options);
  
  return (
    <div className="list">
      <div className="list-header">
      <Navbar/>
      <Header type='list'/>
      </div>
      <div className="l-container">
        <div className="l-wrapper">
          <div className="l-search">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input className='ls-desinput' type="text" placeholder={destination} />
            </div>
            <div className="lsItem lsdate">
              <label htmlFor="">Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyy")} to ${format(date[0].endDate,"MM/dd/yyy")}`} </span>
                    {openDate && <DateRange
                        onChange={(item )=> setDate([item.selection])}
                        ranges={date}
                        className='date'
                        minDate={new Date()}
                    />}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsoptions">

              <div className="ls-op-item">
                <span className="ls-op-txt">
                  Min price <small>per night</small>
                </span>
                <span className="ls-op-txt">
                 Adult
                </span>
                <span className="ls-op-txt">
                 Children
                </span>
                <span className="ls-op-txt">
                 Room
                </span>
              </div>
              <div className="ls-op-item">
              <input type="number" className="ls-op-input" />
                <input type="number" min={1} className="ls-op-input"  placeholder={options.adult}/>
                <input type="number" min={0}  className="ls-op-input" placeholder={options.children} />
                <input type="number" min={1}  className="ls-op-input" placeholder={options.room} />
              </div>
              </div>
            </div>
            <button className='ls-btn'>Search</button>
          </div>
          <div className="l-results">
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List