import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './Login';
import Inicio from './Inicio';

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
        // Autenticación exitosa
        setIsLoggedIn(true);
      } else {
        // Autenticación fallida
        console.error('Credenciales incorrectas');
      }
    } else {
      // Error en la solicitud al servidor
      console.error('Error en la solicitud al servidor');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};


  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <PrivateRoute path="/inicio" component={Inicio} isLoggedIn={isLoggedIn} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

// Componente PrivateRoute para proteger rutas
const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default App;
