/* eslint-disable jsx-a11y/anchor-is-valid */
import './banner.css';

import { FaSearch } from "react-icons/fa";
const Banner=() =>{
return(
    <div className="banner" > 
   
   <div className="  search-caption  ">
       <div className="row">
           <div className="col-3"></div>
           <div className="col-6">
                <div className="  input-search  d-flex align-items-center rounded-pill" >
                    <FaSearch color="#FF385C"/>
                    <input  className="border-0 ml-2 " type="text" placeholder="Where you are going"/>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
   </div>
   <h2 className="caption"> go <br/> near</h2>
   <a className=""> Explore nearby stays</a>
   
    
    </div>
)
}

export default Banner;