import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import data from "../../data/certificates.json"
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
        {
        data.map((certificate) => (
        <SwiperSlide className="box" key={certificate.id}>
          <div>
            <img src={certificate.img_url} alt=""/>
            <a href={certificate.url} className="btn-view" target="_blank" rel="noreferrer">
              View{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-up-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M17 7l-10 10"></path>
                <path d="M8 7l9 0l0 9"></path>
              </svg>
            </a>
          </div>
        </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
  );
}
