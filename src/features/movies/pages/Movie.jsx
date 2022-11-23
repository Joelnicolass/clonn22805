import React from "react";

import { useNavigate, useParams, useLocation } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();

  /*   const location = useLocation();
  console.log(location); */

  const navigate = useNavigate();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Movie;

/* 

http://127.0.0.1:5173/movie?search=hello


*/
