import React from 'react';
import "./Services.css"; 
import ServicesBackground from '../assets/services-background.jpg';
import Cirugias from '../assets/cirugias.jpg'; 
import Diagnosticos from '../assets/diagnosticos.jpg'; 
import Rayosx from '../assets/rayosx.jpg'; 
import Tratamientos from '../assets/tratamientos.jpg'; 
import Vacunas from '../assets/vacunas.jpg'; 




const Services = () => {
  return (
	  <div className="services" style={{backgroundImage:`url(${ServicesBackground})`}}>
		
		<div className="cards">
		  
			<div class="card" >
				<img src={Cirugias} class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title text-center">Cirugias</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
			</div>

			<div class="card" >
				<img src={Diagnosticos} class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title text-center">Diagnosticos</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
			</div>


			<div class="card" >
				<img src={Rayosx} class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title text-center">Rayos-X</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
			</div>
			
			<div class="card" >
				<img src={Tratamientos} class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title text-center">Tratamientos</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
			</div>
			
			
			<div class="card" >
				<img src={Vacunas} class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title text-center">Vacunas</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
			</div>
		</div>
	  </div>
  )
}

export default Services