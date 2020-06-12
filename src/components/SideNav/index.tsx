import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useStoreState } from '~store/hooks';
import { sideNavChildren } from '~store/sidenav/children';
import { StyledSideNav, StyledLogo, ChildrenDiv, LinksDiv } from './styles';

export const SideNav: React.FC = () => {
  const { links, activeChild } = useStoreState(({ sideNav }) => sideNav);

  return (
    <StyledSideNav defaultActiveKey="/" className="flex-column">
      <Link className="nav-link" to="/">
        <StyledLogo />
      </Link>
      {activeChild && (
        <ChildrenDiv>{sideNavChildren[activeChild]()}</ChildrenDiv>
      )}
      <LinksDiv>
        {links.map((link) => (
          <NavLink key={link.path} to={link.path}>
            {link.name}
          </NavLink>
        ))}
      </LinksDiv>
    </StyledSideNav>
  );
};
