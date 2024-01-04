import React from 'react'
import Logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
	<div className="header">
		  <div className="logo">
			<img src={Logo} alt="centro-veterinario-las-torres" width={130}/>	  
		  </div>
		  <div className="header-images">
			  <div className="location">
				  <div className="location-simbol">
				  <span class="material-symbols-outlined">home_pin</span>  
				  </div>
				  <div className="location-text">
				  	<p className='location-field'></p>
				  	<p className='location-value'> Calle Torre Silao, Las Torres </p>	  
				  </div>
			  </div>
			  <div className="location">
				  <div className="location-simbol">
				  <span class="material-symbols-outlined">hourglass_empty</span> 
				  </div>
				  <div className="location-text">
				  	<p className='location-field'></p>
					<p className='location-value'> L. V. 9:00 - 18:00 </p>	 
				  	<p className='location-value'> S. 9:00 - 14:00 </p>	  
					  
				  </div>
			  </div>
			  <div className="location">
				  <div className="location-simbol">
				  <span class="material-symbols-outlined">phone_iphone</span>
				  </div>
				  <div className="location-text">
				  	<p className='location-field'></p>
				  	<p className='location-value'> (477)1598183</p>	  
				  </div>
			  </div>

			
		  </div>
  </div>
  )
}

export default Header