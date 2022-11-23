import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./components/Card";
import { swiperProps } from "./config/props";

const Slider = ({ entities }) => {
  return (
    <Swiper {...swiperProps} className="mySwiper">
      {entities.map((entity) => {
        return (
          <SwiperSlide key={entity.id}>
            <Card entity={entity} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
