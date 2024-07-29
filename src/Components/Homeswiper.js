import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Homeswiper = () => {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="">
            <SwiperSlide>
              <img
                className=""
                src="https://www.newsanyway.com/wp-content/uploads/2020/06/Canva-Business-Team-Planning-1024x683.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=""
                src="https://img.freepik.com/premium-photo/serious-business-group-presentation_13339-233708.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.kenwayconsulting.com/app/uploads/2019/08/shutterstock_633351221-1024x683.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://img.freepik.com/premium-photo/business-team-meeting-modern-office-environment_85574-11411.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://terraskills.com/wp-content/uploads/2021/03/TLS_Tips-on-How-to-Speak-with-Confidence-and-Assertiveness.jpg"
                alt=""
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Homeswiper;
