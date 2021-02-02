/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {setState} from 'react'
import './guests.css'
import {Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const Guests=(adval,chval,infval) => {

    
    let [guestNumbers , setGuestNumbers]=setState();
    let [addGuestNumbers, setAddGuestNumbers]= setState("addNumber");
    let [removeGuestNumbers, setRemoveGuestNumbers]= setState("removeNumber");

    addGuests = () => {
        console.log('clicked');
        guestNumbers = 0
        if ( guestNumbers<=0 && guestNumbers <=16 ) {
            guestNumbers++;
        }else{

        }
    }

    removeGuests = () => {
        console.log('clicked');
        guestNumbers = 0
        if ( guestNumbers > 0 ) {
            guestNumbers--;
        }else{

        }

    }

        
    return (
        <div className="guests justify-content-center p-4">
            <div className="guests__adults d-flex">
                <div className="guests__width">
                    <h3 className="h__style">Adults</h3>
                    <p className="p__style">Ages 13 or above</p>
                </div>
                    <p className="guests__width  m-2">
                        <Button className="remove" onClick={removeGuests} Disabled> <RemoveIcon/> </Button>
                        <input   value={guestNumbers} className="input__style" onChange={this.state.guestnumbers} /> 
                        {/* onChange={e => setendDate(SearchDate.selectionRange.endDate)} */}
                        <Button className="add" onClick={addGuests}> <AddIcon/> </Button>
                    </p>
            </div>
            <div className="guests__children d-flex">
                <div className="guests__width">
                <h3 className="h__style">Children</h3>
                <p className="p__style">Ages 2-12</p>
                </div>
                <p className="guests__width   m-2">
                    <Button className="remove"> <RemoveIcon/> </Button>
                    <input value={guestNumbers} className="input__style " onChange={this.state.guestnumbers} /> 
                    <Button className="add" > <AddIcon/>  </Button>
                </p>
            </div>
            <div className="gustes__infants d-flex">
                <div className="guests__width">
                    <h3 className="h__style">Infants</h3>
                    <p className="p__style">Under 2</p>
                </div>
                <p className="guests__width  m-3">
                    <Button className="remove"> <RemoveIcon/> </Button>
                    <input value={guestNumbers} placeholder="0" className="input__style" onChange={this.state.guestnumbers} /> 
                    <Button className="add" > <AddIcon/> </Button>
                </p>
            </div>
        </div>
    )};
export default Guests;