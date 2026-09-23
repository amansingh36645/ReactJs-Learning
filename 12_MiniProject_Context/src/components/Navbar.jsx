import React, { useContext, useEffect, useState } from "react";
import { pfpContext } from "./LoginContext";

const Navbar = () => {
  let [user, setUser] = useContext(pfpContext);
  

  return (
    <div className="navbar">
      <div className="logo">Aman Singh</div>
      <h4>Welcome: {user}</h4>
      <div className="navbar-bar">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </div>
    </div>
  );
};

export default Navbar;
