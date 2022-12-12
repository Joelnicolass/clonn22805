import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from '../common/components/layouts/homeLayout/HomeLayout';
import Login from '../features/login/pages/Login';
import Movie from '../features/movies/pages/Movie';
import Movies from '../features/movies/pages/Movies';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout>
              <Movies />
            </HomeLayout>
          }
        />

        <Route path="login" element={<Login />} />

        <Route path="movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
