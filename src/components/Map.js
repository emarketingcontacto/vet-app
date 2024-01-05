import React from 'react'
import "./Map.css"; 
import BackgroundAnimal from "../assets/backgroundAnimal.jpg"; 

const Map = () => {
  return (
	  <div id='ubicacion' className="map" style={{backgroundImage:`url(${BackgroundAnimal})`}}>
	
		  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.672230349126!2d-101.75816752338795!3d21.16543848051835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bc79c402c520b%3A0x67dcd03581265aff!2sCentro%20Veterinario%20Las%20Torres!5e0!3m2!1sen!2smx!4v1704350407491!5m2!1sen!2smx"
			  width="100%"
			  height="450"
			  allowfullscreen=""
			  loading="lazy"
			  referrerpolicy="no-referrer-when-downgrade"
			  title='MapLocation'>
		  </iframe>
		  
	  </div>
  )
}

export default Map