/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './guests.css'
import {Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const Guests=() => {

    
    let [guestNumbers , setGuestNumbers]=useState();
    // let [addGuestNumbers, setAddGuestNumbers]= setState("addNumber");
    // let [removeGuestNumbers, setRemoveGuestNumbers]= setState("removeNumber");

    guestNumbers = 0
   let addRemoveGuests = (e) => {
        if ( guestNumbers <=16 ) {
            document.getElementsByClassName("remove").preventDefault();
            guestNumbers++;
            this.setGuestNumbers({
                guestNumbers: e.target.value
            });

            console.log('clicked');
        }else if( guestNumbers > 0 ){
            document.getElementsByClassName("add").preventDefault();
            guestNumbers--;
            this.setGuestNumbers({
            guestNumbers: e.target.value
        })
        console.log('clicked');
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
                        <Button className="remove" onClick={addRemoveGuests} Disabled> <RemoveIcon/> </Button>
                        <input   value={guestNumbers} className="input__style" onChange={this.state.addRemoveGuests} /> 
                        {/* onChange={e => setendDate(SearchDate.selectionRange.endDate)} */}
                        <Button className="add" onClick={addRemoveGuests}> <AddIcon/> </Button>
                    </p>
            </div>
            <div className="guests__children d-flex">
                <div className="guests__width">
                <h3 className="h__style">Children</h3>
                <p className="p__style">Ages 2-12</p>
                </div>
                <p className="guests__width   m-2">
                    <Button className="remove" onClick={addRemoveGuests} > <RemoveIcon/> </Button>
                    <input value={guestNumbers} className="input__style " onChange={this.addRemoveGuests} /> 
                    <Button className="add" onClick={addRemoveGuests} > <AddIcon/>  </Button>
                </p>
            </div>
            <div className="gustes__infants d-flex">
                <div className="guests__width">
                    <h3 className="h__style">Infants</h3>
                    <p className="p__style">Under 2</p>
                </div>
                <p className="guests__width  m-3">
                    <Button className="remove" onClick={addRemoveGuests} > <RemoveIcon/> </Button>
                    <input value={guestNumbers} placeholder="0" className="input__style" onChange={this.addRemoveGuests} /> 
                    <Button className="add" onClick={addRemoveGuests} > <AddIcon/> </Button>
                </p>
            </div>
        </div>
    )};
export default Guests;