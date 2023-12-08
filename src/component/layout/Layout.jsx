import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import "./Layout.scss";
import Filterbox from "../home/Filterbox";
import Navbar_v1 from "../navbar/Navbar_v1";
import Sidebar from "../navbar/Sidebar";
import Banner from "../banner_companies/Banner";
import FeaturedProperties from "../featured_properties/FeaturedProperties";
import Area_RealEstate from "../area_real-estate/Area_RealEstate";
import SaleProperties from "../sale_properties/SaleProperties";
import RentProperties from "../rent_properties/RentProperties";
import Blog from "../blog/Blog";
import Card from "../feedback/Card";
import Feedback from "../feedback/Feedback";
import Agent from "../agent/Agent";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

const Layout = () => {

    const [open, setOpen] = React.useState(false);

    return (
        <div className="all">
            <Navbar_v1 classname="navbar" open={open} setOpen={setOpen}/>
            <Home/>
            <Sidebar open={open} setOpen={setOpen} />
            <Banner/>
            <FeaturedProperties/>
            <Area_RealEstate/>
            <SaleProperties/>
            <RentProperties/>
            <Agent/>
            <Contact/>
            <Blog/>
            <Feedback/>
            <Footer/>


        </div>
    )
}

export default Layout;