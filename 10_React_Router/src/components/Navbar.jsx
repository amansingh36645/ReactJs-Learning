import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>Aman Singh</div>
      <div className="navbar-link">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
