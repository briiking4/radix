import React from "react";
import { Link, withRouter } from "react-router-dom";
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';
import logo from './assets/imgs/logo.png';
import logo1 from './assets/imgs/logo1.png';


function Navigation(props) {
    const { location } = props;
  return (
    <Navbar className="navbar navbar-dark fixed-top" expand="lg">
      <Navbar.Brand to="/"> <img id="rotate" src={logo1} width="95" className="mt-n3"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className={`nav-link  ${
            props.location.pathname === "/" ? "active" : ""
          }`} to="/">HOME</Link>

          <Link className={`nav-link  ${
            props.location.pathname === "/about" ? "active" : ""
          }`} to="/about">ABOUT</Link>

          <Link className={`nav-link  ${
            props.location.pathname === "/merch" ? "active" : ""
          }`} to="/merch"> MERCH</Link>

        </Nav>
        <Nav activeKey={location.pathname} className="ml-auto">
          <Link className={`nav-link  ${
            props.location.pathname === "/members" ? "active" : ""
          }`}  to="/members">MEMBERS</Link>

          <Link className={`nav-link  ${
            props.location.pathname === "/events" ? "active" : ""
          }`}  to="/events">EVENTS</Link>

          <Link className={`nav-link  ${
            props.location.pathname === "/discover" ? "active" : ""
          }`}  to="/discover">DISCOVER</Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default withRouter(Navigation);
