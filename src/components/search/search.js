import './search.css'
import { FaSearch } from "react-icons/fa";

const Search=() =>{
return(
    <div className="" > 

    {/* <div className="search-caption">
      
         hii


    </div> */}
   
      <div className="caption-search d-flex justify-content-around rounded-pill bg-light">
          <div className=" caption-search-inf w-25 ">
              <p>Location</p>
              <input className="border-0" type="text"  placeholder="where are you going"  />
          </div>
          <div className=" caption-search-inf  w-25 ">
              <p>check in</p>
          <input className="border-0" type="text"  placeholder="Add Dates"  />
          </div>
          <div className=" caption-search-inf  w-25  ">
              <p>check out</p>
          <input className="border-0" type="text"  placeholder="Add Dates"  />
          </div>
          <div className="caption-search-inf  w-25 d-flex justify-content-between align-items-lg-center ">
              <div>    
                  <p>guest</p>
                  <input className="border-0" type="text"  placeholder="Add guest"  />
                  </div>
          
          <FaSearch className="mr-1" size="40px" color="FF385C"  />
          </div>
          
         
      
      </div> 
    
    </div>
)
}

export default Search;