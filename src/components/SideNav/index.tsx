import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStoreState } from '~store/hooks';
import { sideNavChildren } from '~store/sidenav/children';
import { StyledSideNav, TitleDiv, ChildrenDiv, LinksDiv } from './styles';

export const SideNav: React.FC = () => {
  const { title, subTitle, links, activeChild } = useStoreState(({ sideNav }) => sideNav);

  return (
    <StyledSideNav defaultActiveKey="/" className="flex-column">
        <TitleDiv><p>{title}</p></TitleDiv>
        {activeChild && <ChildrenDiv>{sideNavChildren[activeChild]()}</ChildrenDiv>}
        <LinksDiv>
          {links.map(link => <NavLink key={link.path} to={link.path}>{link.name}</NavLink>)}
        </LinksDiv>
    </StyledSideNav>
  );
};
