import React from "react";
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

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">Team Project </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">AboutUs</Nav.Link>
            <NavDropdown title="Compaines" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Raw Engineering
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contentstack
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SurfBoard</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
