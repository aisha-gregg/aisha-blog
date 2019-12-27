import React from "react";
import { Home } from "./pages/home/Home";
import { Travel } from "./pages/travel/Travel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/travel">
          <Travel />
        </Route>
      </Switch>
    </Router>
  );
}
