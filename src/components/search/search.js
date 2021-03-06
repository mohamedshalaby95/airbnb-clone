/* eslint-disable no-unused-vars */
//import React , { useState } from 'react';
import React , { useState,useEffect  } from 'react';
import SearchDate from '../search-date/search-date.js';
import './search.css'
import { FaSearch } from "react-icons/fa";
import Guests from '../guests/guests'
//import DayPickerInput from 'react-day-picker/DayPickerInput';
import {useRef } from 'react';
import { useHistory } from "react-router-dom";

const Search=() =>{
    const [showSearch, setShowSearch] = useState(false);
    const [show,setShow] = useState(false);
    const [showGuests, setShowGuests] = useState(false);
    const [indate, setIndate] = useState('From');
    const [endDate, setendDate] = useState('To');
    let [guestNumbers , setGuestNumbers]=useState();

    let locationref=useRef();
    let guestref=useRef();
    let history = useHistory();


 
    return(
        <div className="" > 
            <div style={{width:"88%",marginLeft:"100px"}} className="caption-search d-flex justify-content-around rounded-pill bg-light">
                <div className="caption-search-inf" style={{width:"170%"}}>
                    <p>Location</p> 
                    <input ref={locationref}  className="border-0 p-1" type="text"  placeholder="where are you going ?"  />
                </div>
                <div className=" caption-search-inf" onClick={()=> setShowSearch(!showSearch)}>
                     {showSearch && <SearchDate IsInit={true} setParentInitDate={setIndate}
                         
                     />}
                    <p>Check in</p>
                    {/* <DayPickerInput onDayChange={day => console.log(day)} /> */}
                    

                    <input className="border-0" type="text" value={indate}  onChange={e => setIndate(SearchDate.selectionRange.startDate)}/>

                </div>
                <div className=" caption-search-inf " onClick={()=> setShow(!show)}>
                    {show && <SearchDate IsInit={false} setParentEndDate={setendDate}/>}
                    <p>Check out</p>
                    
                    <input className="border-0" type="text" value={endDate} onChange={e => setendDate(SearchDate.selectionRange.endDate)}/>
                </div>
                <div className="caption-search-inf caption-search-inf-guests d-flex justify-content-between align-items-lg-center ">
                    <div onClick={()=>setShowGuests(!showGuests)} >
                        <div className="guests__show" >
                        {showGuests && <Guests/>}    
                        </div>
                        <p>Guest</p>
                        <input className="border-0 p-1" type="text"  placeholder="Add guest" onChange={e => setGuestNumbers(guestNumbers.target.value)} />
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