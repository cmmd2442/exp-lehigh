import React from 'react';
import Kitchen from '!!url-loader!../../images/517kitchen.jpg';
import BR2 from '!!url-loader!../../images/517bed1.jpg';


const FourBed = () => {
return (
	<span>
	<h1>517 Selfridge St.</h1>	
	<div className="center" >
	 <img src = {Kitchen} className = "photo" alt="test" />
	 <img src = {BR2} className = "photo" alt = "test" />
	</div>
	<h1>Other Houses</h1>	
	</span>
);
};

export default FourBed;
