import React from 'react'
import "./App.css"; 
import Navbar from './components/Navbar';
import Header from './components/Header'
import HeaderBanner from './components/HeaderBanner';
import Services from './components/Services';
import Appointent from './components/Appointent';
import Map from './components/Map';
import Footer from './components/Footer'; 


function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Navbar></Navbar>
      <HeaderBanner />
      <Appointent/>
      <Services />
      <Map />
      <Footer/>
      
    </div>
  );
}

export default App; 
