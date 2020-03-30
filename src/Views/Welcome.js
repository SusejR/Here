import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div className="section">
        <h1>Bienvenido a App Salud</h1>
        <Link to="/RegisterDoc"> 
        <button className="button">Soy Profesional de Salud</button>
        </Link> 

        <button className="button">Soy Paciente</button>
        
        <Link to="/Login"> 
        <a href="">Ya estoy registrado</a>
        </Link>
      </div>
    );
  }
}

export default Welcome;

