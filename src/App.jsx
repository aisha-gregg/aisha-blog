import React from "react";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";

import { LifeAbroad } from "./pages/life-abroad/LifeAbroad";
import { Travel } from "./pages/travel/Travel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Post } from "./components/post/Post";
import { Page } from "./components/page/Page";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Page>
            <Home />
          </Page>
        </Route>
        <Route exact path="/travel">
          <Page>
            <Travel />
          </Page>
        </Route>
        <Route
          path="/travel/:id"
          children={
            <Page>
              <Post />
            </Page>
          }
        ></Route>
        <Route exact path="/life-abroad">
          <Page>
            <LifeAbroad />
          </Page>
        </Route>
        <Route exact path="/about">
          <Page>
            <About />
          </Page>
        </Route>
      </Switch>
    </Router>
  );
}
