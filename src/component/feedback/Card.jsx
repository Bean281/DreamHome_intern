import { Avatar } from "@mui/joy";
import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card-feedback-container">
      <div className="box-feedback">
        <i style={{color:"#FFA920", fontSize:"20px"}} class="fa-solid fa-comments"></i>
        <p>
          “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          tortor justo. Vestibulum vitae vulputate lacus. Aliquam sollicitudin
          mauris odio. Fusce egestas consectetur semper vulputate ”
        </p>
      </div>

      <div className="feedback-owner">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <p className="owner-name">Esther Howard</p>
        <p className="owner-des">Internet Security Assistant</p>
      </div>
    </div>
  );
};

export default Card;
