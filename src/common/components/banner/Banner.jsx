import React, { useEffect } from "react";
import Buttons from "./components/Buttons";
import Classification from "./components/Classification";
import Descript from "./components/Descript";
import Image from "./components/Image";
import Title from "./components/Title";
import Type from "./components/Type";
import { BannerContainer } from "./styles/BannerContainer";

const Banner = ({ data }) => {
  return (
    <BannerContainer image={data?.backdrop}>
      <Image />
      <Type />
      <Title />
      <Descript />
      <Classification />
      <Buttons />
    </BannerContainer>
  );
};

export default Banner;
