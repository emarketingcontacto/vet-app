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
	  <div id='servicios' className="services" style={{backgroundImage:`url(${ServicesBackground})`}}>
		
		<div className="cards">
		  
			<div class="card" >
				<img src={Cirugias} class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title text-center">Cirugias</h5>
						<p class="card-text">Realizamos cualquier tipo de Cirugías Programadas y  de Emergencias</p>
					</div>
			</div>

			<div class="card" >
				<img src={Diagnosticos} class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title text-center">Diagnosticos</h5>
						<p class="card-text">Personal altamente calificado para Diagnosticar cualqiuer tipo de enfermedad</p>
					</div>
			</div>


			<div class="card" >
				<img src={Rayosx} class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title text-center">Rayos-X</h5>
					  <p class="card-text">Contamos con servicio de Rayos X en nuestra clinica</p>
					</div>
			</div>
			
			<div class="card" >
				<img src={Tratamientos} class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title text-center">Tratamientos</h5>
						<p class="card-text">Llevamos el Tratamiento de curación hasta la completa curación de sus mascotas</p>
					</div>
			</div>
			
			
			<div class="card" >
				<img src={Vacunas} class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title text-center">Vacunas</h5>
						<p class="card-text">Contamos con paquetes de Vacunación completa y Cartillas de Vacunación</p>
					</div>
			</div>
		</div>
	  </div>
  )
}

export default Services