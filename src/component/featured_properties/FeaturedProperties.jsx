import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import "./FeaturedProperties.scss";
import Feature_Home from './home/Feature_Home';
import Card from "./card/Card";
import Feature_Smart from './smart_home/Feature_Smart';
import Feature_Apartment from './apartment/Feature_Apartment';
import Feature_Office from './office/Feature_Office';
import Feature_Villa from './villa/Feature_Villa';
import Feature_Bungalow from './bungalow/Feature_Bungalow';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function FeaturedProperties() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center" }}>
        <h1>Featured properties</h1>
        <p style={{width:"80%", textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '50%' }}>
        <Tabs value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example" centered>
          <Tab label="Houses" {...a11yProps(0)} />
          <Tab label="Smart home" {...a11yProps(1)} />
          <Tab label="Apartments" {...a11yProps(2)} />
          <Tab label="Offices" {...a11yProps(3)} />
          <Tab label="Villa" {...a11yProps(4)} />
          <Tab label="Bungalow" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Feature_Home/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Feature_Smart/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Feature_Apartment/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Feature_Office/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Feature_Villa/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Feature_Bungalow/>
      </CustomTabPanel>
    </Box>
  );
}