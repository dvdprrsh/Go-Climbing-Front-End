import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import history from "../history";

import FindGym from "./screens/FindGym";

const App = () => {
	return (
		<Router history={history}>
				<Header />
			<div>
				<Switch>
					<Route path="/find/gym" component={FindGym} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
