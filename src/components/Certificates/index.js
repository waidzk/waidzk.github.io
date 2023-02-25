import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

export default function Certificates() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`Certificates ${theme}`}>
      <h2>Certificates</h2>
      <hr />
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        className="mySwiper boxes"
      >
        <SwiperSlide className="box"></SwiperSlide>
        <SwiperSlide className="box"></SwiperSlide>
        <SwiperSlide className="box"></SwiperSlide>
      </Swiper>
    </div>
  );
}
