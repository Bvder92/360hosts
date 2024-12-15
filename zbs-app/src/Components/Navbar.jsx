import React, { useState } from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <NavLink to="main" className="logo">
        <img src={logo} alt="" />
      </NavLink>
      <imput className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        {/* <li>
          <NavLink to="/main">Header</NavLink>
        </li> */}
        <li>
          <NavLink to="/about">Notre activité</NavLink>
        </li>
        <li>
          <NavLink to="/features">Nos Offres</NavLink>
        </li>
        <li>
          <NavLink to="/why-choose">ZSB agency</NavLink>
        </li>
        <li>
          <NavLink to="/footer">A propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
