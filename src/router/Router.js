// Package imports
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Module imports
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Navigation from "../components/Navigation";
import Employees from "../pages/Employees";
import Footer from "../components/Footer";

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navigation />
				<main className="body">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/aboutus" exact component={AboutUs} />
						<Route path="/employees" exact component={Employees} />
					</Switch>
				</main>
				<Footer />
			</BrowserRouter>
		);
	}
}
export default Router;
