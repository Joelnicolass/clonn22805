import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer } from "../../../styled-components/CardContainer";

const Card = ({ entity }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`movie/${entity.id}`, {
      state: entity,
    });
  };

  return (
    <>
      <CardContainer
        onClick={handleClick}
        image={entity.backdrop}
      ></CardContainer>
    </>
  );
};

export default Card;

/*   const { data, error, isLoading, setCanFetch } = useFetch(
    () => getMovieDetailsById(entity.id),
    false
  ); */
