import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Swiper_Rent.scss";
import "./RentProperties.scss";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Card from "../featured_properties/card/Card";

// Swiper.use([Pagination, Autoplay]);

export default function RentProperties() {
  return (
    <div className="rent-properties">
      <div className="rent-dis">
        <h1>Properties for rent</h1>
        <p>Find your dream apartment with our listing</p>
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
    </div>
  );
}
