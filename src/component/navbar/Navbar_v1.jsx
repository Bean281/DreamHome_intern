import React from "react";
import "./Navbar_v1.scss";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import logo from "../assets/logo@2x.png";

const pages = ["Home", "Property", "Page", "Blog", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar_v1 = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenMenu = () => {
    props.setOpen(true);
  }

  return (
    <div className="nav-container">
      <AppBar className="header" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <img src={logo} alt="" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleOpenNavMenu}
                color="inherit"
                onClick={handleOpenMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography className="nav-item" textAlign="center">
                      {page}
                    </Typography>
                    <i class="fa-solid fa-angle-down"></i>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={logo} alt="" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* {pages.map((page) => ( */}
              {/* <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page} <i class="fa-solid fa-angle-down"></i>
                </Button> */}
              {/* ))} */}

              <div className="menu-container">
                <ul className="main-menu">
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
                            Property List{" "}
                            <i class="fa-solid fa-angle-right"></i>
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
                            Property Grid{" "}
                            <i class="fa-solid fa-angle-right"></i>
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
                            Property Detail{" "}
                            <i class="fa-solid fa-angle-right"></i>
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
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Box className="authenticate-container">
              <Box
                className="authenticate-container"
                sx={{ display: {  md: "flex" } }}
              >
                <div className="action">
                  <i class="fa-regular fa-user"></i>
                  <div className="authenticate-option">Login</div>
                </div>
              </Box>
              <Box
                className="authenticate-container"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <div className="sell-box">
                  <div className="logo">
                    <i class="fa-solid fa-house"></i>
                  </div>
                  <div className="info">Sell Property</div>
                </div>
              </Box>
              </Box>
              

              {/* <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip> */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar_v1;
