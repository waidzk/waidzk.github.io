import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import data from "../../data/braindump.json";
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
        {
          data.map((article)=>(
            <SwiperSlide className="box">
              <a href={article.url}>{article.title}</a>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
