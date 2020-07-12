import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/*Components*/

import DetailsPage from "./components/pages/DetailsPage";
import ComparePage from "./components/pages/ComparePage";
import ExplorePage from "./components/pages/ExplorePage";
import SettingsPage from "./components/pages/SettingsPage";
import ComparisonTablePage from "./components/pages/ComparisonTablePage";
import NavB from "./components/layout/NavB";

/*Styling*/
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavB />
          <Route exact path="/" component={ExplorePage} />
          <Route exact path="/Compare" component={ComparePage} />
          <Route exact path="/Comparison" component={ComparisonTablePage} />
          <Route exact path="/Settings" component={SettingsPage} />
          <Route exact path="/mobiles/:id" component={DetailsPage} />
        </Router>
      </div>
    );
  }
}
