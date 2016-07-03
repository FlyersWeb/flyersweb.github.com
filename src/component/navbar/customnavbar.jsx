import React from 'react'

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
              <NavItem eventKey={1} href="/">Home</NavItem>
              <NavItem eventKey={2} href="/project">Project</NavItem>
              <NavItem eventKey={2} href="/blog">Blog</NavItem>
              <NavItem eventKey={2} href="/portfolio">Portfolio</NavItem>
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