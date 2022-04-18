import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav classname="navbar">
      <Link classname="homepage" to="/">
        HOME
      </Link>
    </nav>
  );
};

export default Navbar;
