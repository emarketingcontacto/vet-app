import React from 'react'
import "../App.css"; 
import 'bootstrap/dist/css/bootstrap.css';
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Home</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#citas">Citas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#servicios">Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#ubicacion'>Ubicación</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar


