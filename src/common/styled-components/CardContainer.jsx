import styled from "styled-components";

export const CardContainer = styled.div`
  transition: all 0.3s ease-in-out;
  width: 300px;
  height: 150px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  &:hover {
    transform: scale(1.1);
  }
`;
