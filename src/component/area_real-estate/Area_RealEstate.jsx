import React from "react";

import area_1 from "../assets/Area/search-area-1.jpg";
import area_2 from "../assets/Area/search-area-2.jpg";
import area_3 from "../assets/Area/search-area-3.jpg";
import area_4 from "../assets/Area/search-area-4.jpg";
import area_5 from "../assets/Area/search-area-5.jpg";
import area_6 from "../assets/Area/search-area-6.jpg";
import area_7 from "../assets/Area/search-area-7.jpg";
import area_8 from "../assets/Area/search-area-8.jpg";

import "./Area_RealEstate.scss";

const Area_RealEstate = () => {
  return (
    <div className="area-container">
      <div className="area-dis">
        <h1>Search real estate by area</h1>
        <p>Find your dream apartment with our listing</p>
      </div>

      <div className="area-box_image">
        <div className="area-item">
          <div className="item-image">
            <img src={area_1} alt="" />
          </div>
          <div className="item-info">
            <p className="info-name">California</p>
            <p className="info-num">1570 listing</p>
          </div>
        </div>

        <div className="area-item">
          <div className="item-image">
            <img src={area_2} alt="" />
          </div>
          <div className="item-info">
            <p className="info-name">California</p>
            <p className="info-num">1570 listing</p>
          </div>
        </div>

        <div className="area-item">
          <div className="item-image">
            <img src={area_3} alt="" />
          </div>
          <div className="item-info">
            <p className="info-name">California</p>
            <p className="info-num">1570 listing</p>
          </div>
        </div>

        <div className="area-item">
          <div className="item-image">
            <img src={area_4} alt="" />
          </div>
          <div className="item-info">
            <p className="info-name">California</p>
            <p className="info-num">1570 listing</p>
          </div>
        </div>

        <div className="area-item">
          <div className="item-image">
            <img src={area_5} alt="" />
          </div>
          <div className="item-info">
            <p className="info-name">California</p>
            <p className="info-num">1570 listing</p>
          </div>
        </div>

        <div className="area-item">
          <div className="item-image">
            <img src={area_6} alt="" />
          </div>
          <div className="item-info">
            <p className="info-name">California</p>
            <p className="info-num">1570 listing</p>
          </div>
        </div>

        <div className="area-item">
          <div className="item-image">
            <img src={area_7} alt="" />
          </div>
          <div className="item-info">
            <p className="info-name">California</p>
            <p className="info-num">1570 listing</p>
          </div>
        </div>

        <div className="area-item">
          <div className="item-image">
            <img src={area_8} alt="" />
          </div>
          <div className="item-info">
            <p className="info-name">California</p>
            <p className="info-num">1570 listing</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Area_RealEstate;
