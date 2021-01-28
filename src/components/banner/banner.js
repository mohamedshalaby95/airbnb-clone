import './banner.css';

import { FaSearch } from "react-icons/fa";
const Banner=() =>{
return(
    <div className="banner" > 
   
    
   <h2 className="caption"> go near</h2>
   <a className=""> Explore nearby stays</a>
   <div className=" d-flex search-caption justify-content-center">
   <div className="  input-search d-flex align-items-center rounded-pill" >
   <FaSearch color="#FF385C"/>
   <input  className="border-0 ml-3 " type="text" placeholder="Where you are going"/>
  
    </div>
   </div>
    
    </div>
)
}

export default Banner;