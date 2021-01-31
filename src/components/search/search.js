import React , { useState } from 'react';
import SearchDate from '../search-date/search-date.js';
import './search.css'
import { FaSearch } from "react-icons/fa";
//import DayPickerInput from 'react-day-picker/DayPickerInput';
import {useRef } from 'react';
import { useHistory } from "react-router-dom";

const Search=() =>{
    const [showSearch, setShowSearch] = useState(false);
    const [show,setShow] = useState(false);
    let locationref=useRef();
    let guestref=useRef();
    let history = useHistory();
    return(
        <div className="" > 
            <div style={{width:"88%",marginLeft:"100px"}} className="caption-search d-flex justify-content-around rounded-pill bg-light">
                <div className="caption-search-inf" style={{width:"170%"}}>
                    <p>Location</p> 
                    <input ref={locationref} className="border-0" type="text"  placeholder="where are you going ?"  />
                </div>
                <div className=" caption-search-inf" onClick={()=> setShowSearch(!showSearch)}>
                     {showSearch && <SearchDate/>}
                    <p>Check in</p>
                    {/* <DayPickerInput onDayChange={day => console.log(day)} /> */}
                    <input className="border-0" type="text"  placeholder="Add Dates"  />
                </div>
                <div className=" caption-search-inf " onClick={()=> setShow(!show)}>
                    {show && <SearchDate/>}
                    <p>Check out</p>
                    <input className="border-0" type="text"  placeholder="Add Dates"  />
                </div>
                <div className="caption-search-inf d-flex justify-content-between align-items-lg-center rounded-pill ">
                    <div>    
                        <p>Guest</p>
                        <input className="border-0" type="text"  placeholder="Add guest"  />
                    </div>
                    <div className="divSearch">
                        <FaSearch onClick={() =>{
              console.log( locationref.current.value)
              history.push(`/hosting/${locationref.current.value}`)
           
                         }} className='Search' size="20px" color="#ffffff"/>
                    </div>
                </div>
            </div>         
        </div>
    )
}

export default Search;