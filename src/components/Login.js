import React, { useState } from 'react';
import '../styles/Login-styles.css';
import { useNavigate } from 'react-router-dom';  // Actualización de la importación

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Cambio de useHistory a useNavigate

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost/auth.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'cors',
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
      });

      if (response.ok) {
        const result = await response.text();
        if (result === 'success') {
          onLogin();
          navigate('/inicio');  // Actualización para usar navigate en lugar de history
        } else {
          setMessage('Credenciales incorrectas');
        }
      } else {
        setMessage('Error en la solicitud al servidor');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="background">
      <div className="login-container">
        <div className="header">
          <h2>Inicio de sesión</h2>
        </div>
        <div className="form">
          <label htmlFor="username">Usuario:</label>
          <div className="input-container">
            <img src="/Imagenes/Imagen_usuario.png" alt="Usuario Icon" />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingrese su usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <label htmlFor="password">Contraseña:</label>
          <div className="input-container">
            <img src="/Imagenes/Imagen_clave.png" alt="Contraseña Icon" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="button" onClick={handleLogin}>
            Iniciar sesión
          </button>

          <div className="message">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
