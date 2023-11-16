import React from 'react';
import './styles/Login-styles.css';

class Login extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="login-container">
          <div className="header">
            <h2>Inicio de sesión</h2>
          </div>
          <div className="form">
            <label htmlFor="username">Usuario:</label>
            <div className="input-container">
              <img src="./Imagenes/Imagen_usuario.png" alt="Usuario Icon" />
              <input type="text" id="username" name="username" placeholder="Ingrese su usuario" required />
            </div>

            <label htmlFor="password">Contraseña:</label>
            <div className="input-container">
              <img src="./Imagenes/Imagen_clave.png" alt="Contraseña Icon" />
              <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required />
            </div>

            <button type="submit">Iniciar sesión</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
