import { Pagination, Navigation } from "swiper";

export const swiperProps = {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    clickable: true,
  },
  navigation: true,
  modules: [Pagination, Navigation],
};
