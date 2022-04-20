import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({ pathname: "/", search: `?q=${searchTerm}` });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search location"
        onChange={handleChange}
        value={searchTerm}
      ></input>
    </form>
  );
};

export default SearchBar;
