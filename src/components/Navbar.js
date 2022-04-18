import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link className="homepage" to="/">
          HOME
        </Link>
        <div>
          <input placeholder="Search location"></input>
        </div>
        <Link className="profile" to="/profile">
          PROFILE
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
