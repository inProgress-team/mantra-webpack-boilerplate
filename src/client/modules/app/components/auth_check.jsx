import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import { authComposer } from 'client/configs/composers.js';

class AuthCheck extends Component {
  render() {
    const { content, loggingIn, user, logout, context } = this.props;
    const FlowRouter = context().FlowRouter;

    if (loggingIn) { return null; }

    if (!user) {
      setTimeout(() => {
        FlowRouter.go('/login');
      });
      return null;
    }

    return (
      <div className="with-navbar">
        <Navbar fixedTop fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Boilerplate</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Accueil</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} onClick={logout}>Déconnexion</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {content()}
      </div>
    );
  }
}

export default authComposer(AuthCheck);
