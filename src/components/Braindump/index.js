import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

export default function Braindump() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`Braindump ${theme}`}>
      <h2>Braindump</h2>
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
