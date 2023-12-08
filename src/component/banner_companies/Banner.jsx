import React from "react";
import slide1 from "../assets/brand-1.png";
import slide2 from "../assets/brand-2.png";
import slide3 from "../assets/brand-3.png";
import slide4 from "../assets/brand-4.png";
import slide5 from "../assets/brand-5.png";
import slide6 from "../assets/brand-6.png";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      <h3>Trusted by over 150+ major companies</h3>

      <div className="banner-slider">
        <div className="slide">
          <img src={slide1} alt="" />
        </div>
        <div className="slide">
          <img src={slide2} alt="" />
        </div>
        <div className="slide">
          <img src={slide3} alt="" />
        </div>
        <div className="slide">
          <img src={slide4} alt="" />
        </div>
        <div className="slide">
          <img src={slide5} alt="" />
        </div>
        <div className="slide">
          <img src={slide6} alt="" />
        </div>

        <div className="slide">
          <img src={slide1} alt="" />
        </div>
        <div className="slide">
          <img src={slide2} alt="" />
        </div>
        <div className="slide">
          <img src={slide3} alt="" />
        </div>
        <div className="slide">
          <img src={slide4} alt="" />
        </div>
        <div className="slide">
          <img src={slide5} alt="" />
        </div>
        <div className="slide">
          <img src={slide6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
