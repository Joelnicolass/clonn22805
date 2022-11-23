import { TMDB } from "../../../config/TMDB";

export const getMovieDetailsById = async (id) => {
  const res = await TMDB.api.get(TMDB.paths.movies.details + id);

  // falta un adapter
  return res.data;
};
