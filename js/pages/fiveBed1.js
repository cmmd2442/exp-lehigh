import React from 'react';
import Front418 from '!!url-loader!../../images/418front.jpg';
import kitchen418 from '!!url-loader!../../images/418kitchen.jpg';
import back418 from '!!url-loader!../../images/418back1.jpg';
import back418_2 from '!!url-loader!../../images/418back2.jpg';


const FiveBed1 = () => {
return (
	<span>
	<h1>418 Selfridge St</h1>	
	<div className="center" >
	 <img src = {Front418} className = "photo" alt="test" />
	 <img src = {kitchen418} className = "photo" alt = "test" />
	 <img src = {back418} className = "photo" alt = "test" />
	 <img src = {back418_2} className = "photo" alt = "test" />
	</div>
	<h1>Other Houses</h1>	
	</span>
);
};

export default FiveBed1;
