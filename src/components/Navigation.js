import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as RRLink } from 'react-router-dom';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        expand='md'
        dark
        color='dark'
      >
        <NavbarBrand tag={RRLink} to='/'>
          <img
            src='/logo-black-192.png'
            alt='TaskTamer'
            style={{ width: '50px' }}
          />
          TaskTamer
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
        >
          <Nav
            className='me-auto'
            navbar
          >
            <NavItem>
              <NavLink tag={RRLink} to='/active-items'>Active Items</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRLink} to='/completed-items'>Completed Items</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRLink} to='/add-todo'>Add New Item</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
