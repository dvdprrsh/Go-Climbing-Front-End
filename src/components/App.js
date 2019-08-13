import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Header } from "../common-components";
import history from "../history";

/* ROUTES HERE */
import { Home } from "./screens/Home";

import Forum from "./screens/Forum";
import Weather from "./screens/Weather";
import FindGym from "./screens/FindGym";
import FindCrag from "./screens/FindCrag";

export const App = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/find-gym" component={FindGym} />
      <Route path="/weather" component={Weather} />
      <Route path="/forums" component={Forum} />
      <Route path="/find-crag" component={FindCrag} />
    </Switch>
  </Router>
);
