import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "../common/components/layouts/homeLayout/HomeLayout";
import Movie from "../features/movies/pages/Movie";
import Movies from "../features/movies/pages/Movies";

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

        <Route path="movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
