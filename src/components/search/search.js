/* eslint-disable no-unused-vars */
import React , { useState } from 'react';
import SearchDate from '../search-date/search-date.js';
import './search.css'
import { FaSearch } from "react-icons/fa";
import Guests from '../guests/guests'
//import DayPickerInput from 'react-day-picker/DayPickerInput';

const Search=() =>{
    const [showSearch, setShowSearch] = useState(false);
    const [show,setShow] = useState(false);
    const [showGuests, setShowGuests] = useState(false);
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(anchorEl ? null : event.currentTarget);
    //   };
    // const id = open ? 'Guests' : undefined;
    return(
        <div className="" > 
            <div style={{width:"88%",marginLeft:"100px"}} className="caption-search d-flex justify-content-around rounded-pill bg-light">
                <div className="caption-search-inf" style={{width:"170%"}}>
                    <p>Location</p> 
                    <input className="border-0 p-1" type="text"  placeholder="where are you going ?"  />
                </div>
                <div className=" caption-search-inf" onClick={()=> setShowSearch(!showSearch)}>
                     {showSearch && <SearchDate/>}
                    <p>Check in</p>
                    {/* <DayPickerInput onDayChange={day => console.log(day)} /> */}
                    <input className="border-0 p-1" type="text"  placeholder="Add Dates"  />
                </div>
                <div className=" caption-search-inf " onClick={()=> setShow(!show)}>
                    {show && <SearchDate/>}
                    <p>Check out</p>
                    <input className="border-0  p-1" type="text"  placeholder="Add Dates"  />
                </div>
                <div className="caption-search-inf caption-search-inf-guests d-flex justify-content-between align-items-lg-center ">
                    <div onClick={()=>setShowGuests(!show)} >
                        <div className="guests__show" >
                        {showGuests && <Guests/>}    
                        </div>
                        <p>Guest</p>
                        <input className="border-0 p-1" type="text"  placeholder="Add guest" 
                        // aria-describedby={id} onClick={handleClick}
                        />
                    </div>
                    <div className="divSearch">
                        <FaSearch className='Search' size="20px" color="#ffffff"/>
                    </div>
                </div>
            </div>         
        </div>
    )
}

export default Search;