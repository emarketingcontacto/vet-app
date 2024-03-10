import React from 'react'; 
import Background from '../assets/background.jpg'; 
import "./HeaderBanner.css";


const HeaderBanner = () => {
  return (
	  <div className='header-banner' style={{ backgroundImage: `url(${Background})` }}>
		  <div className="d-flex justify-content-start align-items-center w-100">
			  <h1>Centro de Atención Veterinaria Las Torres</h1>
		  </div>
	  </div>
  )
}

export default HeaderBanner