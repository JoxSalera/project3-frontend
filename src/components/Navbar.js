import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import "./Navbar.css";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link className="homepage" to="/">
          <span>ITINERARIES</span>
        </Link>

        <SearchBar />

        <Link className="homepage" to="/profile">
          <span>PROFILE</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
