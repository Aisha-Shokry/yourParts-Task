import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/*Components*/

import MobileDetails from "./components/pages/MobileDetails";
import ExplorePage from "./components/pages/ExplorePage";
import SettingsPage from "./components/pages/SettingsPage";
import Compare from "./components/pages/Compare";
import ComparisonTable from "./components/pages/ComparisonTable";

/*Styling*/

import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={ExplorePage} />
          <Route exact path="/Compare" component={Compare} />
          <Route exact path="/Comparison" component={ComparisonTable} />
          <Route exact path="/Settings" component={SettingsPage} />
          <Route exact path="/mobiles/:id" component={MobileDetails} />
        </Router>
      </div>
    );
  }
}
