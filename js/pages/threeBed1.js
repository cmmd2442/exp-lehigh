import React from 'react';
import BR1 from '!!url-loader!../../images/621bed1.jpg';
import BR2 from '!!url-loader!../../images/621bed2.jpg';
import BR3 from '!!url-loader!../../images/621bed3.jpg';


const ThreeBed1 = () => {
return (
	<span>
	<h1>621 Parkhill St.</h1>	
	<div className="center" >
	 <img src = {BR1} className = "photo" alt = "test" />
	 <img src = {BR2} className = "photo" alt = "test" />
	 <img src = {BR3} className = "photo" alt = "test" />
	</div>
	<h1>Other Houses</h1>	
	</span>
);
};

export default ThreeBed1;
