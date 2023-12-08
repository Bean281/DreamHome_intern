import React from "react";
import "./Contact.scss";
import { Button, FormControl, FormLabel, Input, Option, Textarea } from "@mui/joy";
import { KeyboardArrowDown, LocationOn } from "@mui/icons-material";
import Select, { selectClasses } from "@mui/joy/Select";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VillaIcon from "@mui/icons-material/Villa";
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1 className="contact-header">
          We provide the most suitable and quality real estate.
        </h1>
        <p className="contact-dis">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          tristique metus proin id lorem odio
        </p>
        <div className="contact-icon-box">
          <div className="contact-icon-item">
            <i class="contact_icon fa-solid fa-map-location-dot"></i>
            <div className="contact-icon-dis">
              <p className="contact-icon-title">Office address</p>
              <p className="contact-icon-address">
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
            </div>
          </div>

          <div className="contact-icon-item">
            <i class="contact_icon fa-solid fa-phone-volume"></i>
            <div className="contact-icon-dis">
              <p className="contact-icon-title">Request a call back</p>
              <p className="contact-icon-phone">314-555-0123</p>
            </div>
          </div>

          <div className="contact-icon-item">
            <i class="contact_icon fa-solid fa-envelope-open-text"></i>
            <div className="contact-icon-dis">
              <p className="contact-icon-title">Email us</p>
              <p className="contact-icon-email">hellosupport@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div className="contact-form-header">
          <div className="contact-header-content">
            <div className="contact-header-title">Contact us</div>
            <div className="contact-header-dis">
              We will respond as soon as we receive your message.
            </div>
          </div>
          <i class="contact_f_icon fa-solid fa-comment"></i>
        </div>
        <FormControl className="input-place" >
          <FormLabel>Your name</FormLabel>
          <Input
            placeholder="Your name"
            startDecorator={<PersonIcon />}
            sx={{ width: 300 }}
            className="contact-form-input"
          />
        </FormControl>
        <div className="contact-form-call">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Your name"
              startDecorator={<EmailIcon />}
              sx={{ width: 300 }}
              className="contact-form-input"
            />
          </FormControl>

          <FormControl className="input-place">
            <FormLabel>Phone</FormLabel>
            <Input
              placeholder="Your name"
              startDecorator={<LocalPhoneIcon />}
              sx={{ width: 300 }}
              className="contact-form-input"
            />
          </FormControl>
        </div>

        <FormControl className="input-place">
          <FormLabel>Property type</FormLabel>
          <Select
            className="contact-form-input"
            placeholder="Apartment"
            startDecorator={<VillaIcon />}
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
            <Option value="dog">Choose</Option>
            <Option value="cat">Apartment</Option>
            <Option value="fish">House</Option>
            <Option value="bird">Rent</Option>
          </Select>
        </FormControl>

        <FormControl className="input-place">
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your message" color="neutral" minRows={2} size="md" variant="plain" />
        </FormControl>

        <div className="contact-form-button">
            <SendIcon/>
            <p>Send request</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
