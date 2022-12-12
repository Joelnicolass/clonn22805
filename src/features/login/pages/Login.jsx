import React from 'react';
import { AUTH_TYPES, useAuth } from '../../../auth/context/AuthProvider';

const Login = () => {
  const { state, login } = useAuth();

  const handleClcik = () => {
    const user = {
      name: 'Nico',
    };

    login(user);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClcik}>Iniciar Sesion</button>
    </div>
  );
};

export default Login;
