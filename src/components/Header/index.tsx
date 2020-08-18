import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Container } from 'react-bootstrap'
import { StyledNavBar } from './styles'

const NavBar: FC = () => {
  return (
    <StyledNavBar>
      <Container id="main-links">
        <Nav as="ul">
          <Nav.Item as="li">
            <NavLink className="nav-link" exact to="/">
              Dashboard
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </StyledNavBar>
  )
}

export default NavBar
