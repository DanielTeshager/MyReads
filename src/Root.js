import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Search from "./Search";

function Root() {
	return (
		<Router>
			<Route path="/" render={() => <App />} />
			<Route path="/search" render={() => <Search />} />
		</Router>
	);
}

export default Root;
