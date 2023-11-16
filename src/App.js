import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Inicio from './components/Inicio';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('/auth.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
      });

      if (response.ok) {
        const result = await response.text();
        if (result === 'success') {
          setIsLoggedIn(true);
        } else {
          console.error('Credenciales incorrectas');
        }
      } else {
        console.error('Error en la solicitud al servidor');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/inicio" element={isLoggedIn ? <Inicio /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
