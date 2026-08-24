import React from "react";
import {Link, Outlet} from 'react-router-dom'
import Product from "./Product";
import Men from "./Men";
import Women from "./Women";

const About = () => {
  return (
    <div>
      <div>About</div>
      <div>
        <Link to="/about/product">Product</Link>
        <Link to="/about/men">Men</Link>
        <Link to="/about/women">Women</Link>
      </div>
      <Outlet/> 
    </div>
  );
};

export default About;
