import React from "react";
import logo from "../assets/logo@2x.png";

import "./Navbar.scss";
import { Box } from "@mui/joy";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className="nav-container">
      <div className="box-logo">
        <img src={logo} alt="" />
      </div>

      <div className="menu-container">
        <ul className="main-menu sm:display:none" >
          <li className="dropdown">
            <div className="title" style={{ color: "#FFA920" }}>
              Home <i class="fa-solid fa-angle-down"></i>
            </div>

            <ul className="submenu1">
              <li>
                <a href="">Home page 01</a>
              </li>
              <li>
                <a href="">Home page 02</a>
              </li>
              <li>
                <a href="">Home page 03</a>
              </li>
              <li>
                <a href="">Home page 04</a>
              </li>
              <li>
                <a href="">Home page 05</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <div className="title">
              Property <i class="fa-solid fa-angle-down"></i>
            </div>

            <ul className="submenu1">
              <li className="title-v2">
                <a href="">
                  <div className="title-sub">
                    Property List <i class="fa-solid fa-angle-right"></i>
                  </div>
                </a>
                <ul className="submenu2">
                  <li>
                    <a href="">Property List</a>
                  </li>
                  <li>
                    <a href="">Property List Sidebar V1</a>
                  </li>
                  <li>
                    <a href="">Property List Sidebar V2</a>
                  </li>
                </ul>
              </li>
              <li className="title-v2">
                <a href="">
                  <div className="title-sub">
                    Property Grid <i class="fa-solid fa-angle-right"></i>
                  </div>
                </a>
                <ul className="submenu2">
                  <li>
                    <a href="">Property Grid</a>
                  </li>
                  <li>
                    <a href="">Property Grid Sidebar V1</a>
                  </li>
                  <li>
                    <a href="">Property Grid Sidebar V2</a>
                  </li>
                </ul>
              </li>
              <li className="title-v2">
                <a href="">
                  <div className="title-sub">
                    Property Detail <i class="fa-solid fa-angle-right"></i>
                  </div>
                </a>
                <ul className="submenu2">
                  <li>
                    <a href="">Property Detail V1</a>
                  </li>
                  <li>
                    <a href="">Property Detail V2</a>
                  </li>
                  <li>
                    <a href="">Property Detail V3</a>
                  </li>
                </ul>
              </li>
              <li className="title-v2">
                <a href="">
                  <div className="title-sub">
                    Property Map <i class="fa-solid fa-angle-right"></i>
                  </div>
                </a>
                <ul className="submenu2">
                  <li>
                    <a href="">Property Half Map V1</a>
                  </li>
                  <li>
                    <a href="">Property Half Map V2</a>
                  </li>
                  <li>
                    <a href="">Property Half Map V3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <div className="title">
              Page <i class="fa-solid fa-angle-down"></i>
            </div>

            <ul className="submenu1">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Faq's</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Error</a>
              </li>
              <li className="title-v2">
                <a href="">
                  <div className="title-sub">
                    Agents <i class="fa-solid fa-angle-right"></i>
                  </div>
                </a>
                <ul className="submenu2">
                  <li>
                    <a href="">Agents</a>
                  </li>
                  <li>
                    <a href="">Agents Detail</a>
                  </li>
                  <li>
                    <a href="">Agents Sidebar V1</a>
                  </li>
                  <li>
                    <a href="">Agents Sidebar V2</a>
                  </li>
                </ul>
              </li>
              <li className="title-v2">
                <a href="">
                  <div className="title-sub">
                    Agencies <i class="fa-solid fa-angle-right"></i>
                  </div>
                </a>
                <ul className="submenu2">
                  <li>
                    <a href="">Agencies</a>
                  </li>
                  <li>
                    <a href="">Agencies Detail</a>
                  </li>
                  <li>
                    <a href="">Agencies Sidebar V1</a>
                  </li>
                  <li>
                    <a href="">Agencies Sidebar V2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Dashboard</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="">
              <div className="title">
                Blog <i class="fa-solid fa-angle-down"></i>
              </div>
            </a>

            <ul className="submenu1">
              <li>
                <a href="">Blog List</a>
              </li>
              <li>
                <a href="">Blog Grid</a>
              </li>
              <li>
                <a href="">Blog Detail</a>
              </li>
            </ul>
          </li>
          <li className="title">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div className="authenticate-container">
        <div className="action">
          <i class="fa-regular fa-user"></i>
          <div className="authenticate-option">Register / Login</div>
        </div>

        <div className="sell-box">
          <div className="logo">
            <i class="fa-solid fa-house"></i>
          </div>
          <div className="info">Sell Property</div>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
