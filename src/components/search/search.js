import React , { useState,useEffect  } from 'react';
import SearchDate from '../search-date/search-date.js';
import './search.css'
import { FaSearch } from "react-icons/fa";
//import DayPickerInput from 'react-day-picker/DayPickerInput';

const Search=() =>{
    const [showSearch, setShowSearch] = useState(false);
    const [show,setShow] = useState(false);
    const [indate, setIndate] = useState('From');
    const [endDate, setendDate] = useState('To');



    useEffect(() => {
        // Update the document title using the browser API
      
      });
    return(
        <div className="" > 
            <div style={{width:"88%",marginLeft:"100px"}} className="caption-search d-flex justify-content-around rounded-pill bg-light">
                <div className="caption-search-inf" style={{width:"170%"}}>
                    <p>Location</p> 
                    <input className="border-0" type="text"  placeholder="where are you going ?"  />
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
                <div className="caption-search-inf d-flex justify-content-between align-items-lg-center rounded-pill ">
                    <div>    
                        <p>Guest</p>
                        <input className="border-0" type="text"  placeholder="Add guest"  />
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