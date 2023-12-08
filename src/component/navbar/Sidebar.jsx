import * as React from "react";
// import "./NavStyle.scss";
import "./Sidebar.scss";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import AddIcon from "@mui/icons-material/Add";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar(props) {
  const drawerWidth = 220;
  const { window } = props;
  const [categoriesOpen, setCategoriesOpen] = React.useState(false);

  const [homeOpen, setHomeOpen] = React.useState(false);
  const [propertyOpen, setPropertyOpen] = React.useState(false);
  const [pageOpen, setPageOpen] = React.useState(false);
  const [blogOpen, setBlogOpen] = React.useState(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const navigate = useNavigate();

  const handleClick = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  const handleOpenHome = () => {
    setHomeOpen(!homeOpen);
  };

  const handleOpenProperty = () => {
    setPropertyOpen(!propertyOpen);
  };

  const handleOpenPage = () => {
    setPageOpen(!pageOpen);
  };

  const handleOpenBlog = () => {
    setBlogOpen(!blogOpen);
  };

  const handleDrawerClose = () => {
    props.setOpen(false);
  };

  const location = useLocation();

  const drawer = (
    <div>
      <Divider />
      <List>
        <ListItemButton
          onClick={() => navigate("/")}
          className={location.pathname === "/" ? "active" : ""}
        >
          <ListItemIcon>
            <i class="fa-regular fa-user"></i>
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItemButton>
      </List>
      <Divider />

      <List>
        <ListItemButton onClick={handleOpenHome}>
          {/* <ListItemIcon>
            <GridViewOutlinedIcon />
          </ListItemIcon> */}
          <ListItemText primary="Home" />
          {homeOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={homeOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText>Home page 01</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Home page 02</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Home page 03</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Home page 04</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Home page 05</ListItemText>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleOpenProperty}>
          {/* <ListItemIcon>
            <GridViewOutlinedIcon />
          </ListItemIcon> */}
          <ListItemText primary="Property" />
          {propertyOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={propertyOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText>Property List</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Property Grid</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Property Detail</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Property Map</ListItemText>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleOpenPage}>
          {/* <ListItemIcon>
            <GridViewOutlinedIcon />
          </ListItemIcon> */}
          <ListItemText primary="Page" />
          {pageOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={pageOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText>About Us</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Faq's</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Pricing</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Agent</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Agencies</ListItemText>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleOpenBlog}>
          {/* <ListItemIcon>
            <GridViewOutlinedIcon />
          </ListItemIcon> */}
          <ListItemText primary="Blog" />
          {blogOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={blogOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText>Blog List</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Blog Grid</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Blog Detail</ListItemText>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          {/* <ListItemIcon>
            <GridViewOutlinedIcon />
          </ListItemIcon> */}
          <ListItemText primary="Contact" />
        </ListItemButton>
        <ListItemButton>
          <div
            className="sell-box"
            style={{
              display: "flex",
              gap: "2rem",
              backgroundColor: "#ffa920",
              padding: "1rem 1.5rem",
              borderRadius: "10px",
              justifyContent:"center",
              width: "80%"
            }}
          >
            <div className="logo">
              <i class="fa-solid fa-house"></i>
            </div>
            <div className="info">Sell Property</div>
          </div>
        </ListItemButton>

        <ListItemButton>
          <h3>Contact</h3>
          
        </ListItemButton>
        <ListItemButton>
        <div className="box-contact">
          <i class="fa-solid fa-phone-volume"></i>
          <div className="contact-info">
            <span>Call us:</span>
            <span>(201) 555-0124</span>
          </div>
          </div>
        </ListItemButton>
        <ListItemButton>
        <div className="box-contact">
        <i class="fa-solid fa-envelope"></i>
          <div className="contact-info">
            <span>Email:</span>
            <span>ndthung281@gmail.com</span>
          </div>
          </div>
        </ListItemButton>
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={props.open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
