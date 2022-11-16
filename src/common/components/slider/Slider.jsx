import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardContainer } from "../../../common/styled-components/CardContainer";
import { swiperProps } from "./config/props";

const Slider = ({ entities }) => {
  return (
    <Swiper {...swiperProps} className="mySwiper">
      {entities.map((entity) => {
        return (
          <SwiperSlide key={entity.id}>
            <CardContainer image={entity.backdrop}></CardContainer>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
