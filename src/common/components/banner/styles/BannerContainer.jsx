import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 80vh;
  width: 100%;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(16, 16, 16, 1) 0%,
      rgba(16, 16, 16, 0) 10%,
      rgba(16, 16, 16, 0) 60%,
      rgba(16, 16, 16, 1) 100%
    );
  }
`;
BannerContainer.defaultProps = {
  image: "",
};
