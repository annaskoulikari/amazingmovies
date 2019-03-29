import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/searchMovies">Search Any Movie!</NavLink>
    </div>
  );
}

export default Header;
