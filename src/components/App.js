import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Header } from "../common-components";
import history from "../history";

import FindGym from "./screens/FindGym";
import FindCrag from "./screens/FindCrag";

export const App = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/find-gym" component={FindGym} />
      <Route path="/find-crag" component={FindCrag} />
    </Switch>
  </Router>
);
