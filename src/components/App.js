import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import history from "../history";

import FindGym from "./screens/FindGym";

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					{
						<Switch>
							<Route path="/find/gym" component={FindGym} />
						</Switch>
					}
				</div>
			</Router>
		</div>
	);
};

export default App;
