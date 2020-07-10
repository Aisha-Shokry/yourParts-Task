import React, { Component } from "react";

// BootStrap 
import { Navbar, Nav } from "react-bootstrap";

// Router Links 
import { NavLink } from "react-router-dom";

export default class NavB extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="navbar">
          <Navbar.Brand href="/"></Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <NavLink
                exact
                to="/"
                activeStyle={{
                  color: "#2C9CB7",
                  textDecoration: "none",
                  borderBottom: "5px solid #2C9CB7",
                }}
              >
                Explore
              </NavLink>
              <NavLink
                exact
                to="/Compare"
                activeStyle={{
                  color: "#2C9CB7",
                  textDecoration: "none",
                  borderBottom: "5px solid #2C9CB7",
                }}
              >
                Compare
              </NavLink>
              <NavLink
                exact
                to="/Settings"
                activeStyle={{
                  color: "#2C9CB7",
                  textDecoration: "none",
                  borderBottom: "5px solid #2C9CB7",
                }}
              >
                Settings
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
