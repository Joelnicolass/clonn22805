import React from 'react';
import Banner from '../../../common/components/banner/Banner';
import useFetch from '../../../common/hooks/useFetch';
import { getPopularMovies } from '../services/getPopular';
import Slider from '../../../common/components/slider/Slider';
import Title from '../../../common/components/title/Title';
import { CONSTANTS } from '../../../utils/constants';
import { useAuth } from '../../../auth/context/AuthProvider';

const Movies = () => {
  const { state, dispatch } = useAuth();

  const {
    data: movies1,
    error: error1,
    isLoading: isLoading1,
  } = useFetch(getPopularMovies);

  const {
    data: movies2,
    error: error2,
    isLoading: isLoading2,
  } = useFetch(() => getPopularMovies(2));

  return (
    <>
      {isLoading1 || isLoading2 ? (
        <div>Cargando</div>
      ) : (
        <>
          <Banner data={movies1[0]} />
          <Title text={CONSTANTS.MOVIES_VIEW.title1} />
          <Slider entities={movies1} />
          <Title text={CONSTANTS.MOVIES_VIEW.title2} />
          <Slider entities={movies2} />
        </>
      )}
    </>
  );
};

export default Movies;
