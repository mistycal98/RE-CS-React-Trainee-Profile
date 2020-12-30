import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Navigation from "../components/Navigation";
import Companies from "../pages/Companies";
import Login from "../pages/Login";
import { FaAlignRight } from "react-icons/fa";
import "../styles/routerStyle.css";

class Router extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="navBar">
        <button onClick={this.Toggle}>
          <FaAlignRight />
        </button>{" "}
        <BrowserRouter>
          <Navigation />
          <Switch
            className={this.state.toggle ? "nav-links show-nav" : "nav-links"}
          >
            <Route path="/" exact component={Home} />{" "}
            <Route path="/aboutus" exact component={AboutUs} />{" "}
            <Route path="/companies" eaxct component={Companies} />{" "}
            <Route path="/login" exact component={Login} />{" "}
          </Switch>{" "}
        </BrowserRouter>{" "}
      </div>
    );
  }
}
export default Router;
