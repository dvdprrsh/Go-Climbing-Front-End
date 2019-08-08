import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import history from "../history";
import PostList from "./PostList";
import Forum from "./screens/Forum";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/forums" component={Forum} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
