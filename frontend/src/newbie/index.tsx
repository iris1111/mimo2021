import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./style.css";
import Header from "../components/Header";

import TaskLine from "../components/TaskLine/";
import TeamPage from "../components/Team/";
import tasks from "../components/TaskLine/tasks.json";
import events from "./events.json";

// import Swiper core and required modules
import SwiperCore, { Mousewheel, Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Pagination]);

export default function Newbie() {
  return (
    <div>
      <Header events={events} bonus={true} />
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
          <div>
            <Swiper
              navigation={true}
              slideToClickedSlide={false}
              className="task-swiper"
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={30}
            >
              {tasks.map((day) => {
                return (
                  <SwiperSlide>
                    <TaskLine day={day.day} tasks={day.tasks}></TaskLine>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </SwiperSlide>
        <SwiperSlide>
<<<<<<< HEAD
          <div>
            <h1>События</h1>
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1>Команда</h1>
          </div>
        </SwiperSlide>
=======
          <TeamPage/>
        </SwiperSlide>          
>>>>>>> 7a27450cde38f656eb7ca6671e2c830deebbc91d
      </Swiper>
    </div>
  );
}
