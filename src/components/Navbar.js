import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link className="homepage" to="/">
          ITINERARIES
        </Link>
        <div className="search">
          <input placeholder="Search location"></input>
        </div>
        <Link className="homepage" to="/profile">
          PROFILE
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
