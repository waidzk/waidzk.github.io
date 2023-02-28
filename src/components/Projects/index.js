import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import data from "../../data/projects.json"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

export default function Projects() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(data)
  }, [])
  
  return (
    <div className={`Projects ${theme}`}>
      <h2>Projects</h2>
      <hr />
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        className="mySwiper boxes"
      >
      {
        data.map((project) => (
        <SwiperSlide className="box" key={project.id}>
          <div>
            <img src={project.img_url} alt=""/>
            <a href={project.url} className="btn-view" target="_blank" rel="noreferrer">
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
