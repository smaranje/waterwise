import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
const logo = require("../assets/logo.png");

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} alt="" className="nav-logo" />
        </Link>
      </div>
      <div className="nav-wrapper">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/" className="header-underline">
              Home
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/data" className="header-underline">
              Data Tables
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/visualizations" className="header-underline">
              Visualizations
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
