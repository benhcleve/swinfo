import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import DashHome from "./components/layout/DashHome";
import DashPeople from "./components/layout/DashPeople";
import DashPlanets from "./components/layout/DashPlanets";
import DashSpecies from "./components/layout/DashSpecies";

import Background from "../src/components/Images/Background.png";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${Background})` }}>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/home" component={DashHome} />
              <Route exact path="/people" component={DashPeople} />
              <Route exact path="/planets" component={DashPlanets} />
              <Route exact path="/species" component={DashSpecies} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
