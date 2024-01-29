import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="head-wrapper">
          <div className="logo">
            <h1>
              <span>Marvel</span> information portal
            </h1>
          </div>
          <div className="links">
            <NavLink to={'/'}>Characters</NavLink>
            <span className="slash">/</span>
            <NavLink to={'/comics'}>Comics</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
