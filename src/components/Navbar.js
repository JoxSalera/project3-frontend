import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link className="homepage" to="/">
          HOME
        </Link>
        <SearchBar />
        <Link className="profile" to="/profile">
          PROFILE
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
