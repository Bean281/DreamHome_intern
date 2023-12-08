// import React from "react";

// const Feedback = () => {
//   return (
//     <div className="feedback-container">
//       <h1 className="title">From our happy customers</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
//         tristique metus proin id lorem odio
//       </p>
//     </div>
//   );
// };

// export default Feedback;


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Swiper_Feedback.scss";
import "./Feedback.scss";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Card from "../feedback/Card";

// Swiper.use([Pagination, Autoplay]);

export default function Feedback() {
  return (
    <div className="feedback-container">
      <div className="feedback-dis">
        <h1>From our happy customers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
        tristique metus proin id lorem odio</p>
      </div>

      <Swiper 
        breakpoints={{
            0: {
                slidesPerView:1,
                spaceBetween: 30,
            },
          670: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          780: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 1000, // Change slides every 3 seconds
          disableOnInteraction: false, // Continue autoplay even when user interacts with slider
        }}

        modules={[Pagination]}
        className="swiper-rent mySwiper"
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>


      <div className="feedback-ads">
        <p>Become our next customer, and find your dream home <b>Contact us: 314-555-0123</b></p>
      </div>
    </div>
  );
}

