import React from 'react'; 
import Background from '../assets/background.jpg'; 
import HeaderImage from '../assets/headerImage.png'; 
import "./HeaderBanner.css";


const HeaderBanner = () => {
  return (
	  <div className='header-banner' style={{backgroundImage:`url(${Background})`}}>
		  
	  </div>
  )
}

export default HeaderBanner