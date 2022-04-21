import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { AuthContext } from "../context/auth.context";

import "./Navbar.css";
import "../App.css";

const Navbar = () => {
  const { logOutUser, isLoggedIn } = useContext(AuthContext);

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
        {isLoggedIn && (
          <>
            <button onClick={logOutUser}>Log out</button>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
