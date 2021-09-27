import React from 'react';
import Kitchen from '!!url-loader!../../images/625kitchen.jpg';
import BR2 from '!!url-loader!../../images/625bed2.jpg';


const ThreeBed2 = () => {
return (
	<span>
	<h1>625 Parkhill St.</h1>	
	<div className="center" >
	 <img src = {Kitchen} className = "photo" alt="test" />
	 <img src = {BR2} className = "photo" alt = "test" />
	</div>
	<h1>Other Houses</h1>	
	</span>
);
};

export default ThreeBed2;
