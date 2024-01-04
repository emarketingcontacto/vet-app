import React from 'react'
import "./Footer.css";
import Facebook from "../assets/facebook.png";

const footer = () => {
  return (
	  <footer>
		  <div className="aboutus">
			  <h5>Acerca de </h5>
			  <p>Universidad Del Bajío</p>
			  <p>Cedula Profesional: A010101</p>
		  </div>
		  <div className="horarios">
			  <h5>Horarios</h5>
			  <p>Lunes a Viernes 9:00 a 17:00</p>
		  		<p>Sabados 9:00 a 14:00</p>
		  </div>
		  <div className="socials">
			  <h4>Redes Sociales</h4>
			  <div className="footer-icons">
				<a href="tel:+">
					<span class="material-symbols-outlined">on_device_training</span>
				</a>
				<a href="http://facebook.com" className='facebook'>
					<img src={Facebook} width={20} />
				</a>
			  </div>
			  

		  </div>
	</footer>
  )
}

export default footer