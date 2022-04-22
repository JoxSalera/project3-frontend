import React from "react";
import { Link } from "react-router-dom";
import "../pages/Itineraries.css";

const Button = (props) => {
  return (
    <div className="space-btn">
      <Link className="create-btn" to={props.path}>
        {props.text}
      </Link>
    </div>
  );
};

export default Button;
