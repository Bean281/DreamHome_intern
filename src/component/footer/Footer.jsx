import React from "react";
import "./Footer.scss";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Avatar, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Input } from "@mui/joy";

import footer_icon1 from "../assets/footer/footer-icon-1.png";
import footer_icon2 from "../assets/footer/footer-icon-2.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-button">
        <div className="footer-button-item">
          <img src={footer_icon1} alt="" />
          <div className="footer-button-content">
            <h1 className="footer-button-title">You need a house</h1>
            <p className="footer-button-dis">
              Tell us your needs, we will give you thousands of suggestions for
              the dream home.
            </p>
          </div>
          <div className="footer-button-box">
            <LocalPhoneIcon />
            <p>Contact Seller</p>
          </div>
        </div>

        <div className="footer-button-item">
          <img src={footer_icon2} alt="" />
          <div className="footer-button-content">
            <h1 className="footer-button-title">Sell your house</h1>
            <p className="footer-button-dis">
              We will connect you to thousands of people who need to buy a home. Ready for a new house.
            </p>
          </div>
          <div className="footer-button-box">
            <HomeIcon />
            <p>Sell Property</p>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-content-item address">
          <h2 className="fc-item-header">Office Address</h2>
          <p className="adr-title">Head office:</p>
          <p className="address-head">
            2118 Thornridge Cir. Syracuse, Connecticut 35624
          </p>
          <p className="adr-title">Branch:</p>
          <p className="address">
            3891 Ranchview Dr. Richardson, California 62639
          </p>
          <p className="address">3517 W. Gray St. Utica, Pennsylvania 57867</p>
        </div>
        <div className="footer-content-item contact">
          <h2 className="fc-item-header">Contact Seller</h2>
          <div className="fc-contact-icon">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <div className="fc-contact-icon-dis">
              <div className="fc-contact-dis-title">Darrell Steward</div>
              <div className="fc-contact-dis-content">(405) 555-0128</div>
            </div>
          </div>

          <div className="fc-contact-icon">
            <PermPhoneMsgIcon className="contact_icon" />
            <div className="fc-contact-icon-dis">
              <div className="fc-contact-dis-title">Hotline:</div>
              <div className="fc-contact-dis-content">(201) 555-0124</div>
            </div>
          </div>

          <div className="fc-contact-icon">
            <MailIcon className="contact_icon" />
            <div className="fc-contact-icon-dis">
              <div className="fc-contact-dis-title">Email:</div>
              <div className="fc-contact-dis-content-email">
                Realestatecp@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content-item company">
          <h2 className="fc-item-header">Our Company</h2>
          <ul>
            <li>Property For Sale</li>
            <li>About Us</li>
            <li>Our Agents</li>
            <li>FAQ</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-content-item news">
          <h2 className="fc-item-header">Newsletter</h2>
          <p>Sign up to receive the latest articles</p>
          <Input
            placeholder="Your name"
            sx={{ width: 300 }}
            className="news-input"
          />
          <div className="fc-item-btn">
            Sign Up
            <ArrowRightAltIcon />
          </div>
          <FormGroup className="checkbox-group">
            <FormControlLabel
              control={<Checkbox />}
              label="Sign up to receive the latest articles"
            />
          </FormGroup>
        </div>
      </div>

      <div className="footer-nav"></div>

      <p className="footer-cp">
      Copyright © 2023. Designed & Developed by <b>Themesflat.</b>
      </p>
    </div>
  );
};

export default Footer;
