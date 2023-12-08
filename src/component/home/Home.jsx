import React, { useState } from "react";
import "./Home.scss";
import slider from "../assets/slider-1.png";
import Input from '@mui/joy/Input';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Filterbox from "./Filterbox";

const Home = () => {
  const [open, setOpen] = useState(false);



  return (
    <div className="home-container">
      <div className="main">
        <div className="home-content">
          <div className="content-title">
            <span>We will find a perfect </span>
            <span>home for you</span>
          </div>
          <div className="content-des">
            Find a variety of properties that suit you very easily, forget all
            difficulties in finding a residence for you
          </div>

          <div className="content-option-action">
            <div className="button-option-rent">
              Rent
            </div>
            <div className="button-option-buy">
              Buy
            </div>
          </div>

        <div className="biggest-box">
        <div className="content-action">
            <Input className="input" size="lg"  placeholder="Type in here…" />
            <Select
            className="input"
              placeholder="Apartment"
              indicator={<KeyboardArrowDown />}
              sx={{
                width: 240,
                height: 55,
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
            >
              <Option value="dog">Property Type</Option>
              <Option value="cat">Bungalow</Option>
              <Option value="fish">Apartment</Option>
              <Option value="bird">House</Option>
            </Select>
            <Select
            className="input"
              placeholder="Location"
              indicator={<KeyboardArrowDown />}
              sx={{
                width: 240,
                height: 55,
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
            >
              <Option value="dog">Japan</Option>
              <Option value="cat">VietNam</Option>
              <Option value="fish">America</Option>
              <Option value="bird">England</Option>
            </Select>

            <div className="action-button" onClick={() => {setOpen(!open)}}>
            <i class="fa-solid fa-filter"></i>
            </div>

            <div className="search-button">
              <div className="title-b">Search Now </div>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            
          </div>

          {open && <Filterbox className="filter-box"/>}

        </div>
          

              

          <div className="content-static">
            <div className="static-item">
              <div className="num">1500+</div>
              <div className="des">Property ready</div>
            </div>
            <div className="static-item">
              <div className="num">700+</div>
              <div className="des">Happy customer</div>
            </div>
          </div>
        </div>

        <div className="home-img">
          <img src={slider} alt="" />
        </div>
        
        
        


      </div>
    </div>
  );
};

export default Home;
