import React from 'react'; 
import "./Appointment.css";
import BackgroundAnimal from "../assets/backgroundAnimal.jpg"; 

const Appointent = () => {
  return (
	  <div id='citas' className="appointment" style={{ backgroundImage: `url(${BackgroundAnimal})` }}>
		  
		  <div className="form-container container">
				
			<form action="mailto:franciscoarmando@hotmail.com" method='POST' encType='text/plain'>
				<div className="row mb-2">
					<label htmlFor="Nombre">Nombre</label>
					<input type="text" className='form-control' name='Nombre'/>
				</div>

				<div className="row mb-2">
					<label htmlFor="Nombre">Telefono</label>
					<input type="tel" className='form-control px-4' name='Telefono'/>
				</div>

				<div className="row mb-2">
					<label htmlFor="Nombre">Email</label>
					<input type="email" className='form-control' name='Email'/>
				</div>

				<div className="row mb-2">
					<label htmlFor="Nombre">Horario</label>
					<input type="datetime-local"  className='form-control' name='fCita' />
				</div>

				<div className="row my-4">
					<input type="submit" value="Enviar" className='btn btn-primary' />
				</div>
			  </form>
			  
		  </div>
			  
	</div>
  )
}

export default Appointent