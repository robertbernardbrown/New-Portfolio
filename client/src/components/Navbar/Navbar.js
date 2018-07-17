import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Example extends React.Component {
  
  toggle = this.toggle.bind(this);
  state = {
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div id="icon-container">
            <div>
              <a alt="Facebook" href="https://www.facebook.com/robertbernardbrown" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="icons" size="lg" icon={['fab', 'facebook']} /></a>
            </div>
            <div>
              <a alt="Linkedin" href="https://www.linkedin.com/in/robert-bernard-brown/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="icons" size="lg" icon={['fab', 'linkedin']} /></a>
            </div>
            <div>
              <a alt="Github" href="https://github.com/robertbernardbrown" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="icons" size="lg" icon={['fab', 'github']} /></a>
            </div>
            <div>
              <a alt="Instagram" href="https://www.instagram.com/bob_brown_18/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="icons" size="lg" icon={['fab', 'instagram']} /></a>
            </div>
          </div>
          <NavbarToggler onClick={this.toggle} color="text-white" aria-label="Expand Menu"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="ml-auto">
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink onClick={this.toggle} href="#about">About</NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink onClick={this.toggle} href="#portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink onClick={this.toggle} href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}