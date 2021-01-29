import Header from "./header/header";
import Banner from "./banner/banner";
import '../index.css'
import  Search  from "./search/search";



const Home=() =>{
return(
    <div className="main-background"> 
    <div className="row">
        <div className="col-12 ">
        <Header className="" />
        </div>
    </div>
    {/* <div className="container">
    <div className="row search-component">
        <div className="col-12 ">
        <Search  />
        </div>
    </div>
    </div> */}
    
    
   
    <div className="row banner-component">
        <div className="col-12 ">
        <Banner />
        </div>
    </div>
    
   
    
   
   
    
    
    </div>
    
)
}

export default Home;