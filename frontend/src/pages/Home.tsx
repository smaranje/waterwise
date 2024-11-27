import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
const logo = require("../assets/homepic.png");

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <div className="home-first-wrapper">
          <div className="home-first-left">
            <h2 className="home-first-title">Explore the Connections</h2>
            <p className="home-first-para">
              Discover how industrial activities affect our environment. Analyze
              the correlation between air emissions, wastewater discharge, and
              water quality in an interactive way.
            </p>
            <div className="button-wrapper">
              <button className="button-one">
                <Link to="/data" className="header-underline1">
                  Table
                </Link>
              </button>
              <button className="button-two">
                <Link to="/visualizations" className="header-underline">
                  Graph
                </Link>
              </button>
            </div>
          </div>
          <div className="home-img-wrapper">
            <img src={logo} alt="" className="home-img"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
