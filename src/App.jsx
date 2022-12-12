import React from 'react';
import AuthProvider from './auth/context/AuthProvider';
import AppRoutes from './routes/App.routes';

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
