import React from 'react'
import './online.css'
import { Card, CardImg, CardBody} from 'reactstrap';

const Online = () => {

return (
    <div className="online-container">
        <div className="row m-1 mb-3">
            <div class="col-md-6 ">
                <h2 className="font-weight-bold ">Online Experiences</h2>
                <p class="pt-0 ">Interactive activities you can do together, led by expert hosts.</p>
            </div>
            <div class="col-md-4 offset-md-2 ">
                <button className="btn-1 ">Explore all</button>
            </div>
        </div>
        <div className="row m-1">
            <div className="col-md-6">
                <Card >
                    <CardImg
                            src= {require("../../image/online-ex/online1.jpg").default}
                            alt="Card IMG" />
                    <CardBody className="bg-dark font-weight-bolder p-2">
                        <p className="pt-1">Make handmade pasta with Italian grandmas</p> 
                    </CardBody>
                </Card>
            </div>
            <div className="col-md-6">
               <div className="row">
               <div className="col-md-6" >    
                <Card >
                    <CardImg
                            src= {require("../../image/online-ex/online2.jpg").default}
                            alt="Card IMG" />
                    <CardBody className="bg-dark font-weight-bold p-0">
                        <p  className="pt-1">Practice mindful eating through zen philosophy</p> 
                    </CardBody>
                </Card>
            </div> 
               <div className="col-md-6 ">
                    <Card>
                        <CardImg
                                src= {require("../../image/online-ex/online3.jpg").default}
                                alt="Card IMG" ></CardImg>
                        <CardBody className="bg-dark font-weight-bold p-1">
                        <p className="pt-1">Get to know Argentina’s famous Yerba Mate</p> 
                        </CardBody>
                    </Card>
                </div>
               </div>
                <div className="row">
                <div className="col-12 ">
                    <Card >
                        <CardImg
                                src= {require("../../image/online-ex/online4.jpg").default}
                                alt="Card IMG" />
                        <CardBody className="bg-dark font-weight-bolder p-1">
                            <p  className="pt-1">Meditate to music with a Parisian concert pianist</p> 
                        </CardBody>
                    </Card>
            </div>
           
                </div>
           </div>
           
        </div> 
    </div>
)

}
export default Online;

