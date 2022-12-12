import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "../common/components/layouts/homeLayout/HomeLayout";
import Login from "../features/login/pages/Login";
import Movie from "../features/movies/pages/Movie";
import Movies from "../features/movies/pages/Movies";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute isAuthRedirectTo="/">
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute isNotAuthRedirectTo="/login">
              <HomeLayout>
                <Movies />
              </HomeLayout>
            </ProtectedRoute>
          }
        />

        <Route path="movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
