import React from "react";
import "../styles/Navigation.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Home from "./Home";
import Companies from "./Companies";
import AboutUs from "./AboutUs";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar
                className="nav-bar"
                bg="dark"
                variant="light"
                expand="lg"
                sticky="top"
              >
                <Navbar.Brand href="#home" class="heading">
                  <img
                    src="./images/logo.jpg"
                    width="30"
                    height="30"
                    className="logo-image"
                    alt=" "
                  />
                  Project
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/companies">Companies</Nav.Link> */}
                    <Nav.Link href="/aboutus">About Us</Nav.Link>
                    <NavDropdown title="Companies" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Raw Engineering
                      </NavDropdown.Item>
                      <NavDropdown.Divider />

                      <NavDropdown.Item href="#action/3.2">
                        ContentStack
                      </NavDropdown.Item>
                      <NavDropdown.Divider />

                      <NavDropdown.Item href="#action/3.3">
                        SurfBoard
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                    </NavDropdown>
                  </Nav>
                  {/* <Form inline>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form> */}
                </Navbar.Collapse>
              </Navbar>
              <br />
              <br />

              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/aboutus">
                  <AboutUs />
                </Route>
                <Route exact path="/compaines">
                  <Companies />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
