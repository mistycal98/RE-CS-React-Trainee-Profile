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
import { render } from "@testing-library/react";

class DemoNavigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <NavDropdown title="Companies" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">RE </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">CS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">SB</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default DemoNavigation;
