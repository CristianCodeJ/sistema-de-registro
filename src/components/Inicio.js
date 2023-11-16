import React, { useEffect } from 'react';
import '../styles/Inicio-styles.css';

const Inicio = () => {
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12 || 12;

      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;

      document.getElementById('clock').innerHTML = timeString;
    };

    const intervalId = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <nav className="sidebar">
        <ul>
          <li>
            <a href="#">
              <img src="./Imagenes/Imagen_inicio.png" alt="" />
              <span>Inicio</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./Imagenes/Imagen_cotizaciones.png" alt="" />
              <span>Cotizaciones</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./Imagenes/Imagen_observaciones.png" alt="" />
              <span>Observaciones</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./Imagenes/Imagen_ayuda.png" alt="" />
              <span>Ayuda</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./Imagenes/Imagen_cerrar_sesion.png" alt="" />
              <span>Cerrar Sesión</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="content">
        <h1>¡BIENVENIDO!</h1>

        <div className="large-image-container">
          <img src="./Imagenes/Imagen_icono.png" alt="Imagen Grande" className="large-image" />
        </div>

        <div className="title-text-container">
          <h2>SISTEMA DE REGISTRO</h2>
          <p>
            El sistema de registro es una plataforma diseñada para simplificar y agilizar el proceso de registro y observación de eventos.
          </p>
          <p>Selecciona la opción del menú que deseas realizar.</p>
        </div>

        <div className="clock-container">
          <span id="clock"></span>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
