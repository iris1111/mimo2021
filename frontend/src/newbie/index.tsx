import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./style.css";

import TaskLine from "../components/TaskLine/";
// import Swiper core and required modules
import SwiperCore, { Mousewheel, Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Pagination]);

export default function Newbie() {
  return (
    <div>
      <div className="header">Header</div>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{ sensitivity: 120, thresholdDelta: 5 }}
        pagination={{
          clickable: true,
        }}
        className="section-swiper"
      >
        <SwiperSlide>
          <Swiper
            navigation={true}
            slideToClickedSlide={false}
            className="task-swiper"
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <TaskLine day={1}></TaskLine>
            </SwiperSlide>
            <SwiperSlide>
              <TaskLine day={2}></TaskLine>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Events</h1>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
