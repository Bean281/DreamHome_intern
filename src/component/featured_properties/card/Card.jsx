import React from "react";
import "./Card.scss";
import { Avatar } from "@mui/joy";
import SwipeableTextMobileStepper from "./Swiper_Card";

const Feature_Home = () => {
  return(
    <div className="card-container">
      <div className="card-image">
<SwipeableTextMobileStepper/>
      </div>
      <div className="card-info">
        <div className="info-header">
          Gorgeous Apartment Building
        </div>
        <div className="info-dis">
        <i class="fa-regular fa-map"></i>
          58 Hullbrook Road, Billesley, B13 0LA
        </div>
        <div className="info-price">$7,500</div>

        <div className="info-detail">

          <div className="detail-item">
          <i class="fa-solid fa-bed"></i> 
          <p>Beds: <b>4</b></p>
          </div>
          
          <div className="detail-item">
          <i class="fa-solid fa-bath"></i>
          <p>Beds: <b>2</b></p>
          </div>
          
          <div className="detail-item">
          <i class="fa-solid fa-ruler-combined"></i>
          <p>Beds: <b>4</b></p>
          </div>
          
        </div>

        <div className="info-owner">
          <div className="owner-action"><b>+</b> Compare</div>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <div className="owner-time">3 years</div>
        </div>
      </div>
    </div>
  )
}

export default Feature_Home;