import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./style.css";
import Header from "../components/Header";

import TaskLine from "../components/TaskLine/";
import TeamPage from "../components/Team/";
import tasks from "../components/TaskLine/tasks.json";

// import Swiper core and required modules
import SwiperCore, { Mousewheel, Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Pagination]);

export default function Newbie() {
  return (
    <div>
      <Header/>
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
              {
                tasks.map((day) => {
                  return (
                    <SwiperSlide>
                      <TaskLine day={day.day} tasks={day.tasks}></TaskLine>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>            
          </div>          
        </SwiperSlide>
        <SwiperSlide>
          <TeamPage/>
        </SwiperSlide>          
      </Swiper>
    </div>
  );
}
