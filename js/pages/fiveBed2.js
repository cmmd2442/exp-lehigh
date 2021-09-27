import React from 'react';
import Front from '!!url-loader!../../images/8stFront.jpg';
import LivingRoom from '!!url-loader!../../images/8stLivingRoom.jpg';
import Bedroom from '!!url-loader!../../images/8stBedroom.jpg';
import Deck from '!!url-loader!../../images/8stDeck.jpg';

const FiveBed2 = () => {
return (

        <span>
        <h1>302 West 8 street (Corner of Montclair)</h1> 
        <div className="center" >
         <img src = {Front} className = "photo" alt="test" />
         <img src = {LivingRoom} className = "photo" alt = "test" />
         <img src = {Bedroom} className = "photo" alt = "test" />
         <img src = {Deck} className = "photo" alt = "test" />
        </div>
        <h1>Other Houses</h1>     
        </span>



);
};

export default FiveBed2;

