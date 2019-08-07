import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import history from "../history";

import FindGym from "./screens/FindGym";
import FindRoute from "./screens/FindRoute";

const App = () => {
	return (
		<div>
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/find/gym" component={FindGym} />
						<Route path="/find/route" component={FindRoute} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
