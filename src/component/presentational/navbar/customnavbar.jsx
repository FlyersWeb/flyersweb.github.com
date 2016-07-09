import React from 'react'

import { Link } from 'react-router'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const CustomNavbar = React.createClass({
  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Flyers Web</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <li role="presentation"><Link to="/">Home</Link></li>
              <li role="presentation"><Link to="/project">Project</Link></li>
              <li role="presentation"><Link to="/blog">Blog</Link></li>
              <li role="presentation"><Link to="/portfolio">Portfolio</Link></li>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="mailto:contact@flyers-web.org">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
});

module.exports = CustomNavbar;