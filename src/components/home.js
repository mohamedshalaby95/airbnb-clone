import Header from "./header/header";
import Banner from "./banner/banner";
import LiveCards from "./LiveCards/Livecards";
//import Footer from "./footer/footer";
import '../index.css'
//import  Search  from "./search/search";



const Home=() =>{
return(
    <div>

    <div className="main-background"> 
    <div className="row">
        <div className="col-12 ">
        <Header className="" />
        </div>
    </div>
    <div className="row banner-component">
        <div className="col-12 ">
        <Banner />
        </div>
    </div> 
    </div>
    <div className="row live-cards-section">
    <div className="col-3 ">
    <LiveCards
       // src="../image/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg"
        src={require(`../image/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg`).default}
        title="Entire homes"
         />
    </div>
    <div className="col-3 ">
    <LiveCards
       // src="../image/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg"
        src={require(`../image/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg`).default}
        title="Unique stayes"
         />
    </div>
    <div className="col-3 ">
    <LiveCards
       // src="../image/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg"
        src={require("../image/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg").default}
        title="Cabins and cottage"
         />
    </div>
    <div className="col-3 ">
    <LiveCards
      //  src="../image/fbe849a4-841a-41b3-b770-419402a6316f.jpg"
        src={require("../image/fbe849a4-841a-41b3-b770-419402a6316f.jpg").default}
        title="Pets welcocme"
         />
    </div>

    </div>
    </div>
    
)
}

export default Home;