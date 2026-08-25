import React, { useContext } from "react";
import { ThemeChng } from "../context/ThemeContext";

const Navbar = () => {
  let [theme, setTheme] = useContext(ThemeChng);

  const ChngBtn = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return <button onClick={ChngBtn}>Theme Change {theme}</button>;
};

export default Navbar;
