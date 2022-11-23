import { TMDB } from "../../../config/TMDB";
import { moviesAdapter } from "../adapters/movies";

export const getPopularMovies = async (page = 1) => {
  const res = await TMDB.api.get(TMDB.paths.movies.popular, {
    params: {
      page,
    },
  });

  return moviesAdapter(res.data.results);
};
