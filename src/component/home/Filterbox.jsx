import Checkbox from "@mui/joy/Checkbox";
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import React from "react";
import "./Filterbox.scss";
import Sliderbar from "./Sliderbar";

const Filterbox = () => {
  return (
    <div className="box-container">
      <div className="option-box">
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

        <Sliderbar className="input"/>
        <Sliderbar className="input"/>
      </div>

      <div className="checkbox-container">
        <div className="checkbox-group">
          <Checkbox color="neutral" label="Swimming pool" />
          <Checkbox color="neutral" label="Garage" />
          <Checkbox color="neutral" label="Alarm system" />
        </div>
        <div className="checkbox-group">
          <Checkbox color="neutral" label="Balcony" />
          <Checkbox color="neutral" label="Outdoor area" />
          <Checkbox color="neutral" label="Broadband" />
        </div>
        <div className="checkbox-group">
          <Checkbox color="neutral" label="Ensuite" />
          <Checkbox color="neutral" label="Built in robes" />
          <Checkbox color="neutral" label="Gym" />
        </div>
        <div className="checkbox-group">
          <Checkbox color="neutral" label="Tennis court" />
          <Checkbox color="neutral" label="Study" />
          <Checkbox color="neutral" label="Outdoor spa" />
        </div>
      </div>
    </div>
  );
};

export default Filterbox;
