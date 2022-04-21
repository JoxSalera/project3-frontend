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
          Itin' Express
        </Link>

        <SearchBar />
        <Link className="profile" to="/profile">
          My account
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
