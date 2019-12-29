import React from "react";
import { Home } from "./pages/home/Home";
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
        <Route path="/living-abroad">
          <Page>
            <Travel />
          </Page>
        </Route>
      </Switch>
    </Router>
  );
}
