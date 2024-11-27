import React from 'react';
import './splashPage.css';


const SplashPage: React.FC = () => {
    return (
      <div className="splash-container">
        <header className="header">
          <h1>Air, Water, and Industry Correlation Explorer</h1>
          <p>Investigate environmental impacts on water bodies</p>
        </header>
  
        <section className="content">
          <h2>Explore the Connections</h2>
          <p>
            Discover how industrial activities affect our environment. Analyze the
            correlation between air emissions, wastewater discharge, and water
            quality in an interactive way.
          </p>
          <h3>Product Pitch:</h3>
          <p>
        In the recent climate of the world, understanding how human activity impacts
        the environment is more important than ever. Our product allows usees to to explore  
        the relationships between stream water quality, air emissions, and industrial wastewater discharge.
        By using environmental datasets, we provide an intuitive platform for individuals of different 
        backgrounds to analyze trends and visualize correlations to make data-driven decisions. Whether 
        your focus is policy development or environmental preservation, this tool will empower you with
        the needed insights.
          </p>
          <button className="start-button">Get Started</button>
        </section>
      </div>
    );
  };
  

export default SplashPage;
