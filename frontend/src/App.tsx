import React from "react";
// import "./components/splashPage";
// // import SplashPage from './components/splashPage';
// import "./components/AllWasteWaterPage";
// import AllWasteWaterPage from './components/AllWasteWaterPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";
import Visualizations from "./pages/Visualizations";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="App" data-testid="App">
      
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/data" component={Data} />
          <Route path="/visualizations" component={Visualizations} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

/*
      
*/
