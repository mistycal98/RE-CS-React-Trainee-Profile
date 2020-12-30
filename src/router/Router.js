import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Navigation from "../components/Navigation";
import Companies from "../pages/Companies";
import Login from "../pages/Login";
class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/companies" eaxct component={Companies} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Router;
