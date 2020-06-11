import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Container, Dropdown } from 'react-bootstrap';
import UserIcon from '~images/man-gr.svg';
import CustomDropDown from '~components/Header/Dropdown';
import { StyledLogo, StyledNavBar } from './styles';

const NavBar: React.FC = () => {
  return (
    <StyledNavBar>
      <Link className="nav-link" to="/">
        <StyledLogo />
      </Link>
      <Container id="main-links">
        <Nav as="ul">
          <Nav.Item as="li">
            <NavLink className="nav-link" exact to="/">
              Dashboard
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink className="nav-link disabled" to="/content">
              Content
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink className="nav-link disabled" to="/segments">
              Segments
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink className="nav-link disabled" to="/notifications">
              Notifications
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink className="nav-link disabled" to="/campaigns">
              Campaigns
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink className="nav-link disabled" to="/admin">
              Admin
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink className="nav-link" to="/settings">
              Settings
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
      <CustomDropDown icon={<UserIcon />}>
        <Dropdown.Item eventKey="1">Account</Dropdown.Item>
        <Dropdown.Item eventKey="2">Logout</Dropdown.Item>
      </CustomDropDown>
    </StyledNavBar>
  );
};

export default NavBar;
